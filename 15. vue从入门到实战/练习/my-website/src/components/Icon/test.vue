<!--
 * @Author: Astray
 * @Date: 2023-05-25 19:52:01
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-26 21:21:59
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Icon\test.vue
-->
<template>
  <div class="test-container">
    <div
      class="item"
      v-for="item in types"
      :key="item"
    >
      <Icon :type="item" />
      <label>{{ item }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  data() {
    return {
      types,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  margin: 20px auto;
}
.item {
  margin: 5px;
  text-align: center;
}

.icon-container {
  display: block;
  font-size: 20px;
}
</style>
