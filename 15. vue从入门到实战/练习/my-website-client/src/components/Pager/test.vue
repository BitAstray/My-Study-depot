<!--
 * @Author: Astray
 * @Date: 2023-05-25 19:52:01
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-26 21:15:29
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Pager\test.vue
-->
<template>
  <div class="test-container">
    <Pager
      :total="300"
      @pageChange="handlePageChange"
      :current="current"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 20px;
  color: red;
}
</style>
