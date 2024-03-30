<!--
 * @Author: BitCreate
 * @Date: 2024-03-26 19:17:05
-->
<template>
  <view class="article-detail-container">
    <view class="detail-title"> {{ articleData.title }} </view>

    <view class="detail-header">
      <view class="detail-logo">
        <image :src="articleData.author.avatar" mode="aspectFill" />
      </view>
      <view class="detail-header-content">
        <view class="detail-header-content-title">
          {{ articleData.author.author_name }}
        </view>
        <view class="detail-header-content-info">
          <text>{{ articleData.create_time }}</text>
          <text>{{ articleData.browse_count }} 浏览</text>
          <text>{{ articleData.thumbs_up_count + " 赞" }}</text>
        </view>
      </view>
      <button type="default" class="detail-header-button" @click="_followAuthor">
        {{ isFollowAuthor ? "取消关注" : "关注" }}
      </button>
    </view>

    <view class="detail-content-container">
      <view class="detail-html">
        <u-parse :content="content" />
      </view>
      <!-- 评论内容部分 -->
      <view class="detail-comment">
        <view class="comment-title"> 最新评论 </view>
        <view
          class="comment-content-container"
          v-for="item in commitList"
          ::key="item.comment_id"
        >
          <CommentBox :commentData="item" @commentReply="commentReply"></CommentBox>
        </view>
        <view class="no-data" v-if="!commitList.length"> 暂无评论 </view>
      </view>
    </view>

    <!-- 评论输入组件 -->
    <view class="detail-bottom">
      <view class="input-container" @click="openMaskerComment">
        <text>谈谈你的看法</text>
        <uni-icons type="compose" color="#f07373" size="16" />
      </view>
      <view class="detail-bottom-icons">
        <view class="detail-bottom-icon-box" @click="goCommentPage">
          <uni-icons type="chat" color="#f07373" size="22" />
        </view>
        <SaveLikes class="detail-bottom-icon-box" :item="articleData" size="22" />
        <view class="detail-bottom-icon-box">
          <uni-icons
            :type="isCompliments ? 'hand-up-filled' : 'hand-up'"
            color="#f07373"
            size="22"
            @click="_updateCompliments"
          />
        </view>
      </view>
    </view>

    <!-- 评论组件 -->
    <CommentMasker
      :showPopup="showPopup"
      @closePopup="showPopup = $event"
      @sendCommentData="_sendCommentData"
    ></CommentMasker>
  </view>
</template>

<script>
import { marked } from "marked";
import uParse from "@/components/u-parse/u-parse.vue";
export default {
  components: {
    uParse,
  },
  name: "ArticleDetail",
  onLoad(...options) {
    this.articleData = this.$Router.currentRoute.query;
    // 文章详情的获取
    this._getArticleDetail();
    // 获取评论列表
    this._getCommentList();
  },
  data() {
    return {
      articleData: null,
      showPopup: false,
      commentVal: "",
      commitList: [],
      replyData: {},
    };
  },
  methods: {
    // 打开弹窗
    async openMaskerComment() {
      await this.checkedIsLogin();
      this.showPopup = true;
    },
    // 获取文章详细
    async _getArticleDetail() {
      const res = await this.$http.get_article_detail({
        article_id: this.articleData._id,
      });
      this.articleData = res;
    },
    // 发送内容到后端
    async _sendCommentData(val) {
      // 发送评论内容到后端
      const res = await this.$http.add_comment({
        userId: this.userInfo._id,
        articleId: this.articleData._id,
        content: val,
        ...this.replyData,
      });
      uni.showToast({
        title: res.msg,
        mask: true,
      });
      this.showPopup = false;
      this.replyData = {};
      this._getCommentList();
    },
    // 获取评论
    async _getCommentList() {
      const res = await this.$http.get_comment_list({
        articleId: this.articleData._id,
      });
      this.commitList = res;
    },
    // 处理回复事件函数
    commentReply(data) {
      this.replyData = {
        comment_id: data.comment.comment_id,
        is_reply: data.isReply,
      };
      data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id);
      this.openMaskerComment();
    },
    // 改变用户关注作者状态
    async _followAuthor() {
      await this.checkedIsLogin();
      const res = await this.$http.update_follow_author({
        authorId: this.articleData.author.id,
        userId: this.userInfo._id,
      });
      // 显示弹窗
      uni.showToast({
        title: res.msg,
      });
      // 改变store里面的用户存储状态
      let followIds = [...this.userInfo.author_likes_ids];
      if (followIds.includes(this.articleData.author.id)) {
        followIds = followIds.filter((item) => item !== this.articleData.author.id);
      } else {
        followIds.push(this.articleData.author.id);
      }
      this.updateUserInfo({ ...this.userInfo, author_likes_ids: followIds });
      uni.$emit("updateAuthor");
    },
    // 改变文章点赞状态
    async _updateCompliments() {
      await this.checkedIsLogin();
      const res = await this.$http.update_compliments({
        articleId: this.articleData._id,
        userId: this.userInfo._id,
      });
      // 显示弹窗
      uni.showToast({
        title: res.msg,
      });
      // 改变store里面的用户存储状态
      let followIds = [...this.userInfo.thumbs_up_article_ids];
      if (followIds.includes(this.articleData._id)) {
        followIds = followIds.filter((item) => item !== this.articleData._id);
        this.articleData.thumbs_up_count--;
      } else {
        followIds.push(this.articleData._id);
        this.articleData.thumbs_up_count++;
      }
      this.updateUserInfo({ ...this.userInfo, thumbs_up_article_ids: followIds });
    },
    // 跳转到评论页面
    goCommentPage() {
      uni.navigateTo({
        url: `/pages/commentList/commentList?articleId=${this.articleData._id}`,
      });
    },
  },
  computed: {
    // 将 markdown 转换为 html
    content() {
      try {
        return marked(this.articleData.content);
      } catch (error) {
        return " ";
      }
    },
    // 是否关注作者
    isFollowAuthor() {
      try {
        return (
          this.userInfo &&
          this.userInfo.author_likes_ids.includes(this.articleData.author.id)
        );
      } catch (error) {
        return false;
      }
    },
    // 是否点赞
    isCompliments() {
      try {
        return (
          this.userInfo &&
          this.userInfo.thumbs_up_article_ids.includes(this.articleData._id)
        );
      } catch (error) {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./css/articleDetail.scss";
</style>
