<!--
 * @Author: BitCreate
 * @Date: 2024-03-30 15:36:07
-->
<template>
  <view>
    <view class="comment-list-content" v-for="item in commentList" :key="item.comment_id">
      <CommentBox :commentData="item" @commentReply="commentReply"></CommentBox>
    </view>
    <uni-load-more
      :status="isLoad"
      :contentText="{
        contentdown: '上拉加载更多评论',
        contentnomore: '没有更多评论了',
        contentrefresh: '正在加载...',
      }"
    />
    <!-- 弹窗展示 -->
    <CommentMasker
      :showPopup="showPopup"
      @closePopup="showPopup = $event"
      @sendCommentData="_sendCommentData"
    ></CommentMasker>
  </view>
</template>

<script>
export default {
  onLoad(props) {
    this.articleId = props.articleId;
    this._getCommentList();
  },
  onReachBottom() {
    if (this.isLoad === "noMore" || this.isLoad === "loading") return;
    this.page++;
    this._getCommentList();
  },
  data() {
    return {
      articleId: "",
      commentList: [],
      pageSize: 5,
      page: 1,
      isLoad: "more",
      showPopup: false,
      replyData: {},
    };
  },
  methods: {
    async _getCommentList() {
      this.isLoad = "loading";
      const res = await this.$http.get_comment_list({
        articleId: this.articleId,
        pageSize: this.pageSize,
        page: this.page,
      });
      if (res.length < this.pageSize) {
        this.isLoad = "noMore";
      } else {
        this.isLoad = "more";
      }
      let oldList = JSON.parse(JSON.stringify(this.commentList));
      oldList.push(...res);
      this.commentList = oldList;
    },
    // 发送内容到后端
    async _sendCommentData(val) {
      // 发送评论内容到后端
      const res = await this.$http.add_comment({
        userId: this.userInfo._id,
        articleId: this.articleId,
        content: val,
        ...this.replyData,
      });
      uni.showToast({
        title: res.msg,
        mask: true,
      });
      this.showPopup = false;
      this.replyData = {};
      this.page = 1;
      this.commentList = [];
      this.isLoad = "more";
      this._getCommentList();
    },
    commentReply(data) {
      this.replyData = {
        comment_id: data.comment.comment_id,
        is_reply: data.isReply,
      };
      data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id);
      this.openMaskerComment();
    },
    async openMaskerComment() {
      await this.checkedIsLogin();
      this.showPopup = true;
    },
  },
};
</script>

<style lang="scss">
.comment-list-content {
  padding: 0 30rpx;
  border-bottom: 1px solid #eee;
}
</style>
