<!--
 * @Author: Astray
 * @Date: 2023-06-06 14:39:59
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-10 21:47:49
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Blog\components\BlogDetail.vue
-->
<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览量:{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <div
      v-html="blog.htmlContent"
      class="markdown-body"
    ></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
