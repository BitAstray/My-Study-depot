<!--
 * @Author: Astray
 * @Date: 2023-06-06 21:35:47
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-08 13:21:04
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\LoadingButton\test.vue
-->
<template>
  <LoadingButton :click="handleClick"></LoadingButton>
</template>

<script>
import LoadingButton from "./";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    async handleClick(count) {
      console.log(count);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("有一个位置错误");
        }, 3000);
      });
    },
  },
};
</script>

<style lang="less" scoped>
body {
  text-align: center;
}
</style>
