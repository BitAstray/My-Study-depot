<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.test-container {
  padding-top: 50px;
  width: 300px;
  height: 500px;
  background-color: @dark;
  margin: 50px auto;
}
</style>
