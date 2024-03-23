<!--
 * @Author: BitCreate
 * @Date: 2024-03-20 14:23:33
-->
<template>
  <view @click="goArticleDetail">
    <!-- 基础卡片 -->
    <view class="list-card" v-show="item.mode === 'base'">
      <view class="list-card-img">
        <image :src="item.cover[0] ? item.cover[0] : '/static/img/logo.jpeg'" mode="aspectFill" />
      </view>
      <view class="list-card-content">
        <view class="list-card-content-title">
          <text>{{ item.title }}</text>
          <SaveLikes :item="item"></SaveLikes>
        </view>
        <view class="list-card-content-desc">
          <view class="article-type">{{ item.classify }}</view>
          <view class="browse-number">{{ item.browse_count + "浏览" }}</view>
        </view>
      </view>
    </view>

    <!-- 多图模式 -->
    <view class="list-card mode-column" v-show="item.mode === 'column'">
      <view class="list-card-top">
        <text>{{ item.title }}</text>
        <SaveLikes :item="item"></SaveLikes>
      </view>

      <view class="list-card-middle">
        <view class="img-container" v-for="(img, index) in item.cover.slice(0, 3)" :key="index">
          <image :src="img" mode="aspectFill" />
        </view>
      </view>

      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">{{ item.classify }}</view>
        <view class="browse-number">{{ item.browse_count + "浏览" }}</view>
      </view>
    </view>

    <!-- 大图模式 -->
    <view class="list-card mode-image" v-show="item.mode === 'image'">
      <view class="list-card-top">
        <view class="img-container">
          <image :src="item.cover[0]" mode="aspectFill" />
        </view>
      </view>

      <view class="list-card-middle">
        <text>{{ item.title }}</text>
        <SaveLikes :item="item"></SaveLikes>
      </view>

      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">{{ item.classify }}</view>
        <view class="browse-number">{{ item.browse_count + "浏览" }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    goArticleDetail() {
      console.log("goArticleDetail");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/ListCard.scss";
</style>
