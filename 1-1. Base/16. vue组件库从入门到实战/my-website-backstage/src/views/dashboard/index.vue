<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:45:47
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">您好！{{ name }}，欢迎使用个人博客后台</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashoard",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
