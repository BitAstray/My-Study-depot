<!--
 * @Author: BitCreate
 * @Date: 2024-03-20 12:55:25
-->
<template>
  <view class="list-scroll-container">
    <scroll-view scroll-y class="list-scroll" @scrolltolower="loadMore">
      <ListCard
        v-on="$listeners"
        v-for="item in articleList"
        :key="item._id"
        :item="item"
      ></ListCard>
      <uni-load-more :status="status" v-if="this.classify" />
    </scroll-view>
  </view>
</template>

<script>
export default {
  created() {
    if (this.classify) this._getArticleList();
    if (this.searchList.length) this.articleList = this.searchList;
  },
  name: "ListItem",
  props: {
    classify: {
      type: String,
      default: "",
    },
    searchList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      articleList: [],
      status: "more",
      page: 1,
      pageSize: 6,
      total: 0,
    };
  },
  methods: {
    loadMore() {
      if (this.classify === "") return;
      if (this.status === "loading") return;
      if (this.articleList.length >= this.total) {
        this.status = "noMore";
        return;
      }
      this.page++;
      this._getArticleList();
    },
    async _getArticleList() {
      this.status = "loading";
      const res = await this.$http.get_article_list({
        classify: this.classify,
        page: this.page,
        pageSize: this.pageSize,
      });
      this.articleList.push(...res.articleList);
      this.total = res.total;
      this.status = "more";
    },
  },
};
</script>

<style lang="scss" scoped>
.list-scroll-container {
  height: 100%;
  .list-scroll {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
