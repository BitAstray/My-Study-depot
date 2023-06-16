<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  height: 100vh;
  width: 300px;
  background-color: #202020;
}
</style>
