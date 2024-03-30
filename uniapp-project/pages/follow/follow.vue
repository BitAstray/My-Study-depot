<!--
 * @Author: BitCreate
 * @Date: 2024-03-29 13:44:29
-->
<template>
  <view class="follow-container">
    <view class="follow-tab">
      <view class="follow-tab-box">
        <view
          class="follow-tab-item"
          :class="{ active: currentIndex === 0 }"
          @click="currentIndex = 0"
          >文章</view
        >
        <view
          class="follow-tab-item"
          :class="{ active: currentIndex === 1 }"
          @click="currentIndex = 1"
          >作者</view
        >
      </view>
    </view>

    <!-- 内容区域 -->
    <view class="follow-list-container">
      <swiper
        class="follow-list-swiper"
        :current="currentIndex"
        @change="currentIndex = $event.detail.current"
      >
        <swiper-item>
          <!-- 文章列表组件 -->
          <ListItem :searchList="articleList" v-if="articleList.length"></ListItem>
          <view class="no-data" v-else>暂无收藏文章</view>
        </swiper-item>
        <swiper-item>
          <AuthorList :authorList="authorList" v-if="authorList.length" />
          <view class="no-data" v-else>暂无关注作者</view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  onLoad() {
    // #ifdef MP-WEIXIN
    if (!this.userInfo) {
      uni.navigateTo({
        url: "/pages/userInfo/login/login",
      });
      return;
    }
    // #endif
    uni.$on("updateArticle", (data) => {
      this._getFollowArticle("noLoading");
    });
    uni.$on("updateAuthor", (data) => {
      this._getFollowAuthor("noLoading");
    });
    this._getFollowArticle();
    this._getFollowAuthor();
  },
  data() {
    return {
      currentIndex: 0,
      articleList: [],
      authorList: [],
    };
  },
  methods: {
    // 获取关注的文章
    async _getFollowArticle(isLoading) {
      const res = await this.$http.get_follow_article({
        userId: this.userInfo._id,
        isLoading,
      });
      this.articleList = res;
    },
    // 获取关注作者
    async _getFollowAuthor(isLoading) {
      const res = await this.$http.get_follow_author({
        userId: this.userInfo._id,
        isLoading,
      });
      this.authorList = res;
      console.log(this.authorList);
    },
  },
};
</script>

<style lang="scss">
@import "./css/follow.scss";
</style>
