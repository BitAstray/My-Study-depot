<!--
 * @Author: BitCreate
 * @Date: 2024-03-20 14:38:25
-->
<template>
  <view class="save-icons">
    <uni-icons @click="changeSaveStatus" type="heart-filled" color="#ff6600" size="20" />
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
  data() {
    return {};
  },
  methods: {
    async changeSaveStatus() {
      console.log(this.item._id);
      // todo 判断用户是否登录
      // 登录 改变当前的收藏状态
      // 没有登录 跳转到登录页面
      uni.navigateTo({ url: "/pages/userInfo/login/login" });
    },
  },
};
</script>

<style></style>
