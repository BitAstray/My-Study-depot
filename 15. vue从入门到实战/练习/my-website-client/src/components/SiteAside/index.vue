<!--
 * @Author: Astray
 * @Date: 2023-05-27 22:20:04
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 22:26:18
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\SiteAside\index.vue
-->
<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p
      v-if="data"
      class="footer"
    >
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
.site-aside-container {
  height: 100%;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .title {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
}

.avatar-container {
  margin: 0 auto;
}

.contact-container {
  margin-left: 10px;
}

.footer {
  text-align: center;
  font-size: 12px;
}
</style>
