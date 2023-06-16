<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleComment"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog";
export default {
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        //评论正在加载，什么也不干
        return;
      }
      const range = 100; //距离滚动到底部的范围
      const toButtom = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
      if (toButtom <= range) {
        // 到达了底部
        this.fetchMore();
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    //加载下一页
    async fetchMore() {
      //没有更多数据了
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleComment(formData, callback) {
      const result = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(result);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>
