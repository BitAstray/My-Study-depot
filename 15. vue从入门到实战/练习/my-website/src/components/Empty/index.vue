<!--
 * @Author: Astray
 * @Date: 2023-05-27 15:12:56
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-27 15:34:06
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Empty\index.vue
-->
<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
}

.icon-container {
  font-size: 100px;
}
</style>
