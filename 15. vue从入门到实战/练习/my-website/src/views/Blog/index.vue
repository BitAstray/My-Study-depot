<!--
 * @Author: Astray
 * @Date: 2023-05-29 16:00:24
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-02 21:28:02
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Blog\index.vue
-->
<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.blog-container {
  height: 100vh;
}
</style>
