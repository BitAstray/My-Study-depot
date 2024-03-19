<!--
 * @Author: BitCreate
 * @Date: 2024-03-18 21:38:16
-->
<template>
  <view>
    other page
    <TestComponent :parentData="parentData"></TestComponent>
  </view>
</template>

<script>
export default {
  data() {
    return {
      parentData: "父组件的数据",
    };
  },
  methods: {},
};
</script>

<style></style>
