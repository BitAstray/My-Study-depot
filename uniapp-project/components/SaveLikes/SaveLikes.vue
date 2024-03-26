<!--
 * @Author: BitCreate
 * @Date: 2024-03-20 14:38:25
-->
<template>
  <view class="save-icons">
    <uni-icons
      @click="changeSaveStatus"
      :type="isInfo ? 'heart-filled' : 'heart'"
      color="#ff6600"
      size="20"
    />
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
  },
  computed: {
    isInfo() {
      if (this.userInfo) {
        return this.userInfo.article_likes_ids.includes(this.item._id);
      }
      return false;
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
        mask: true,
      });
      this.updateUserInfo(data);
    },
  },
};
</script>

<style></style>
