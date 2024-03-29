<template>
  <view class="comment-box">
    <view class="comment-header">
      <view class="comment-header-logo">
        <image :src="commentData.author.author_avatar" mode="aspectFill" />
      </view>
      <view class="comment-header-info">
        <view class="title">{{ commentData.author.author_name }}</view>
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
        <view class="comment-button">回复</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "CommentBox",
  props: {
    commentData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./css/CommentBox.scss";
</style>
