<template>
  <div
    class="blog-category-container"
    v-loading="isLoading"
  >
    <h2>文章分类</h2>
    <RightList
      :list="list"
      @selected="handleSelected"
    />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogTypes } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const articleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { name: "全部", aside: `${articleCount}篇`, id: -1, articleCount },
        ...this.data,
      ];
      return result.map((item) => {
        return {
          ...item,
          isSelect: item.id === this.categoryId,
          aside: `${item.articleCount}篇`,
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelected(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
