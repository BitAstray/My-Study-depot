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
      <!-- 但组件作为搜索页面使用的时候，展示回退按钮 -->
      <view
        class="return-icon"
        :style="{
          top: statusHeight + 'rpx',
        }"
        @click="returnArticleList"
        v-if="isSearch"
      >
        <uni-icons type="back" color="#fff" size="24" />
      </view>

      <view
        @click="goSearchPage"
        class="nav-bar-content"
        :style="{ marginRight: marginRight + 'rpx', marginLeft: isSearch ? '20rpx' : '' }"
      >
        <uni-icons type="search" color="#999" size="24" />
        <view v-if="!isSearch" class="nav-bar-search-text"> 输入文章标题进行搜索 </view>
        <input
          v-else
          class="search-input"
          type="text"
          placeholder="输入文章标题进行搜索"
          confirm-type="search"
          @confirm="changeInput"
          v-model.trim="searchVal"
        />
      </view>
    </view>
    <!-- 底部的垫片 -->
    <view :style="{ height: statusHeight + 80 + 'rpx' }"></view>
  </view>
</template>

<script>
export default {
  name: "NavBar", // 方便我们devtools进行内容查找
  props: {
    isSearch: {
      type: Boolean,
      default: false,
    },
    parentVal: {
      type: String,
      default: "",
    },
  },
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
    // 通知父组件进行搜索操作
    changeInput() {
      this.$emit("sendSearchData", this.searchVal);
    },
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
      if (this.isSearch) return;
      uni.navigateTo({
        url: "/pages/search/search",
      });
    },
    returnArticleList() {
      // #ifdef H5
      uni.switchTab({ url: "/pages/index/index" });
      // #endif
      // #ifndef H5
      uni.navigateBack();
      // #endif
    },
  },
  computed: {
    searchVal: {
      get() {
        return this.parentVal;
      },
      set(val) {
        this.$emit("updateVal", val);
        if (!val) {
          this.$emit("sendSearchData");
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/NavBar.scss";
</style>
