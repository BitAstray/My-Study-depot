<!--
 * @Author: Astray
 * @Date: 2023-05-25 19:52:01
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-27 15:33:15
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Empty\test.vue
-->
<template>
  <div class="test-container">
    <Empty></Empty>
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container {
  position: relative;
  width: 500px;
  height: 500px;
}
</style>
