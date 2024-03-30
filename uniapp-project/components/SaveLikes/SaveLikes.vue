<!--
 * @Author: BitCreate
 * @Date: 2024-03-20 14:38:25
-->
<template>
  <view class="save-icons" @click.stop="changeSaveStatus">
    <uni-icons :type="isInfo ? 'heart-filled' : 'heart'" color="#ff6600" :size="size" />
  </view>
</template>

<script>
export default {
  name: "SaveLikes",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    size: {
      type: String,
      default: "20",
    },
  },
  computed: {
    isInfo() {
      try {
        return this.userInfo && this.userInfo.article_likes_ids.includes(this.item._id);
      } catch (error) {
        return false;
      }
    },
  },
  methods: {
    async changeSaveStatus() {
      await this.checkedIsLogin();
      const { msg, data } = await this.$http.update_save_like({
        articleId: this.item._id,
        userId: this.userInfo._id,
      });
      uni.showToast({
        title: msg,
        icon: "none",
        mask: true,
      });
      this.updateUserInfo(data);
      uni.$emit("updateArticle");
    },
  },
};
</script>

<style></style>
