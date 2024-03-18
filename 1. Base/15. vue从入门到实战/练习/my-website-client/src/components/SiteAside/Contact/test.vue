<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact,
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
