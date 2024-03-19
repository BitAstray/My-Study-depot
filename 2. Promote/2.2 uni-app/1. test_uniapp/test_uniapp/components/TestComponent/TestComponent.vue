<!--
 * @Author: BitCreate
 * @Date: 2024-03-18 22:13:09
-->
<template>
  <view>
    TestComponent
    <text>父组件传递的数据：{{ parentData }}</text>
  </view>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {};
  },
  props: {
    parentData: String,
  },
};
</script>

<style></style>
