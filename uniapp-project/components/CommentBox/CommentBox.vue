<!--
 * @Author: BitCreate
 * @Date: 2024-03-29 13:44:29
-->
<template>
  <view class="comment-box">
    <view class="comment-header">
      <view class="comment-header-logo">
        <image :src="commentData.author.author_avatar" mode="aspectFill" />
      </view>
      <view class="comment-header-info">
        <view class="title" v-if="!commentData.is_reply">
          {{ commentData.author.author_name }}
        </view>
        <view class="title" v-else>
          {{ commentData.author.author_name }}
          <text class="reply-text">回复</text>
          {{ commentData.to }}
        </view>
        <view class="title">
          <uni-dateformat :date="commentData.create_time" format="yyyy-MM-dd hh:mm:ss" />
        </view>
      </view>
    </view>
    <!-- 评论内容展示 -->
    <view class="comment-content">
      <view class="comment-content-text">
        <text>{{ commentData.comment_content }}</text>
      </view>
      <view class="comment-info">
        <view
          class="comment-button"
          @click="commentReply({ comment: commentData, isReply })"
          >回复</view
        >
      </view>
      <!-- 子回复展示区域 -->
      <view
        class="comment-reply-list"
        v-for="item in commentData.replyArr"
        :key="item.comment_id"
      >
        <CommentBox
          :commentData="item"
          @commentReply="commentReply"
          :isReply="true"
        ></CommentBox>
      </view>
    </view>
  </view>
</template>

<script>
import CommentBox from "@/components/CommentBox/CommentBox.vue";
export default {
  name: "CommentBox",
  components: {
    CommentBox,
  },
  props: {
    commentData: {
      type: Object,
      default: () => {},
    },
    isReply: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    commentReply(data) {
      if (data.isReply) {
        data.comment.reply_id = data.comment.comment_id;
        data.comment.comment_id = this.commentData.comment_id;
      }
      // 向articleDetail里面发送的时候只有一次
      this.$emit("commentReply", data);
    },
  },
};
</script>

<style lang="scss">
@import "./css/CommentBox.scss";
</style>
