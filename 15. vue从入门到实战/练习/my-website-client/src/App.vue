<!--
 * @Author: Astray
 * @Date: 2023-05-25 19:52:01
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-10 16:56:16
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\App.vue
-->
<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default><RouterView /></template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.app-container {
  .self-fill(fixed);
}

.aside {
  width: 250px;
  height: 100%;
  background-color: @dark;
}
</style>
