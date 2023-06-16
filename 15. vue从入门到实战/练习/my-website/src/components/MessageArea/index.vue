<!--
 * @Author: Astray
 * @Date: 2023-06-08 22:06:40
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-09 22:36:29
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\MessageArea\index.vue
-->
<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div
      class="loading"
      v-loading="isListLoading"
    ></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
