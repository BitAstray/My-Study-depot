<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:13:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-22 16:33:39
 * @FilePath: \Code\16. vue组件库从入门到实战\my-website-backstage\src\views\addBlog\index.vue
import { ElSelect } from "element-ui/types/select";
import { ElSelect } from "element-ui/types/select";
-->
<template>
  <div v-loading="isLoading">
    <!-- 文章标题 -->
    <div>
      <p class="lable">文章标题</p>
      <el-input
        v-model="form.title"
        placeholder="请输入文章标题"
        class="input"
      ></el-input>
    </div>

    <div>
      <p class="lable">文章编辑</p>
      <Editor
        :initialValue="form.editorText"
        height="600px"
        ref="toastuiEditor"
        :options="editorOptions"
      />
    </div>

    <div>
      <p class="lable">文章描述</p>
      <el-input
        v-model="form.description"
        placeholder="请输入文章标题"
        type="textarea"
        rows="5"
      ></el-input>
    </div>

    <Upload uploadTitle="文章头图" v-model="form.thumb" />

    <div>
      <p class="lable">选择分类</p>
      <el-select v-model="form.select" placeholder="请选择">
        <el-option
          v-for="item in blogType"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
    </div>

    <div class="lable" v-if="model === 'add'">
      <el-button type="primary" class="sumbit-buttom" @click="editArticleHandle"
        >发布文章</el-button
      >
    </div>

    <div class="lable" v-else>
      <el-button type="primary" class="sumbit-buttom" @click="editArticleHandle"
        >确认修改</el-button
      >

      <el-button class="lable" @click="$router.push('/blogList')"
        >取消</el-button
      >
    </div>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/zh-cn";
import { Editor } from "@toast-ui/vue-editor";
// ...
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";

import "@toast-ui/chart/dist/toastui-chart.css";
import chart from "@toast-ui/editor-plugin-chart";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

import uml from "@toast-ui/editor-plugin-uml";

import { getBlogTypes, editBlog, findOneBlog, addBlog } from "@/api/blog";
import Upload from "@/components/Upload";
export default {
  props: ["model"],
  data() {
    return {
      isLoading: false,
      form: {
        title: "",
        editorText: "", //用户编辑内容
        description: "",
        thumb: "", //文章描述
        select: "",
      },
      blogType: [], //文章分类
      editorOptions: {
        language: "zh-CN",
        plugins: [
          codeSyntaxHighlight,
          chart,
          colorSyntax,
          tableMergedCell,
          uml,
        ],
      },
    };
  },
  computed: {
    blogId() {
      return this.$route.params.id;
    },
  },
  async created() {
    this.isLoading = true;
    const resp = await getBlogTypes();
    this.blogType = resp.data;

    if (this.model === "edit") {
      const BlogInfo = await findOneBlog(this.blogId);
      this.form.title = BlogInfo.data.title;
      this.$refs.toastuiEditor.invoke("setHTML", BlogInfo.data.htmlContent);
      this.form.thumb = BlogInfo.data.thumb;
      this.form.select = BlogInfo.data.category
        ? BlogInfo.data.category.id
        : "";
      this.form.description = BlogInfo.data.description;
    }

    this.isLoading = false;
  },
  methods: {
    async editArticleHandle() {
      let html = this.$refs.toastuiEditor.invoke("getHTML");
      let markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
      const data = {
        title: this.form.title,
        description: this.form.description,
        createDate: new Date().getTime(),
        categoryId: this.form.select,
        // 传递空数组，内容由后端生成
        // toc: [],
        htmlContent: html,
        markdownContent: markdown,
        thumb: this.form.thumb,
      };
      if (
        data.title &&
        data.description &&
        data.htmlContent &&
        data.categoryId
      ) {
        if (this.model === "edit") {
          await editBlog({ id: this.blogId, data: data });
          this.$message.success("修改成功");
        } else {
          this.$message.success("添加成功");
          await addBlog(data);
        }
        this.$router.push("/bloglist");
      } else {
        this.$message.error("请填写所有内容");
      }
    },
  },
  components: {
    Editor,
    Upload,
  },
};
</script>

<style lang="scss" scoped>
.lable {
  margin: 15px 0;
  font-weight: 100;
}
.sumbit-buttom {
  margin-right: 15px;
}
</style>
