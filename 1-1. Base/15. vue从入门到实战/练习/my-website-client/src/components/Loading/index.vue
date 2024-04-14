<!--
 * @Author: Astray
 * @Date: 2023-06-01 21:11:48
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-01 21:26:19
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Loading\index.vue
-->
<template>
  <img
    class="loading-container"
    :src="loadingUrl"
  />
</template>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
