<!--
 * @Author: BitCreate
 * @Date: 2024-03-19 18:32:18
-->
<template>
  <view class="nav-bar">
    <view class="nav-bar-top">
      <!-- 处理app以及小程序默认导航栏 -->
      <view
        :style="{
          height: statusHeight + 'rpx',
        }"
      ></view>
      <view
        @click="goSearchPage"
        class="nav-bar-content"
        :style="{ marginRight: marginRight + 'rpx' }"
      >
        <uni-icons type="search" color="#999" size="24" />
        <view class="nav-bar-search-text"> 输入文章标题进行搜索 </view>
      </view>
    </view>
    <!-- 底部的垫片 -->
    <view :style="{ height: statusHeight + 80 + 'rpx' }"></view>
  </view>
</template>

<script>
export default {
  name: "NavBar", // 方便我们devtools进行内容查找
  created() {
    this.getSystemInfo();
  },
  data() {
    return {
      statusHeight: 20,
      marginRight: 0,
    };
  },
  methods: {
    getSystemInfo() {
      // 获取系统信息
      const systemInfo = uni.getSystemInfoSync();
      systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2);
      // #ifdef MP-WEIXIN
      // 获取胶囊按钮信息
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      this.statusHeight = menuButtonInfo.top * 2;
      this.marginRight = menuButtonInfo.width * 2;
      // #endif
    },
    // 跳转搜索页面
    goSearchPage() {
      uni.navigateTo({
        url: "/pages/search/search",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/NavBar.scss";
</style>
