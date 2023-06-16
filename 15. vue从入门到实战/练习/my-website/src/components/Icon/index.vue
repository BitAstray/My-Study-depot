<!--
 * @Author: Astray
 * @Date: 2023-05-26 14:58:17
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-30 13:55:23
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Icon\index.vue
-->
<template>
  <i
    class="iconfont icon-container"
    :class="fontClass"
  ></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";

.iconfont {
  font-size: inherit;
  flood-color: inherit;
}
</style>
