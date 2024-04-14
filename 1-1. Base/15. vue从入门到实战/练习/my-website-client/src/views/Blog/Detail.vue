<!--
 * @Author: Astray
 * @Date: 2023-06-03 20:50:49
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-16 13:04:30
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Blog\Detail.vue
-->
<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading" v-if="!isLoading">
        <BlogTOC :toc="data.toc" v-if="!isLoading" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";
export default {
  mixins: [fetchData({}), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        //文章不存在
        this.$router.push("/404NotFound");
        return;
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}

.right-container {
  position: relative;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>
