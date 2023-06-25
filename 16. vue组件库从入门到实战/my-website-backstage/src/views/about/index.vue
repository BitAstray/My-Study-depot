<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:51:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-23 15:59:51
 * @FilePath: \Code\16. vue组件库从入门到实战\my-website-backstage\src\views\about\index.vue
-->
<template>
  <div class="app-container" v-loading="isLoading">
    <div class="label">
      <p>关于我</p>
      <el-input
        placeholder="请输入链接地址"
        v-model="data"
        :disabled="isDisabled"
      ></el-input>
    </div>

    <el-button type="primary" class="lable" @click="editLinkHandel">{{
      btnConnect
    }}</el-button>
  </div>
</template>

<script>
import { editAbout, getAbout } from "@/api/about";

export default {
  data() {
    return {
      isLoading: false,
      data: "",
      btnConnect: "编辑",
      isDisabled: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const resp = await getAbout();
      console.log(resp.data);
      this.data = resp.data;
      this.isLoading = false;
    },
    async editLinkHandel() {
      if (this.btnConnect === "编辑") {
        this.btnConnect = "完成";
        this.isDisabled = !this.isDisabled;
      } else {
        if (this.data) {
          this.isDisabled = !this.isDisabled;
          this.btnConnect = "编辑";
          await editAbout({ url: this.data });
          this.$message.success("更改成功");
          this.fetchData();
        } else {
          this.$message.warning("输入框不能为空");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lable {
  margin: 15px 0;
}
</style>
