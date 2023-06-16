<!--
 * @Author: Astray
 * @Date: 2023-06-06 21:28:24
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-07 22:32:16
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\LoadingButton\index.vue
-->
<template>
  <div class="loading-button-container">
    <button
      @click="handleClick"
      :disabled="isLoading"
    >
      {{ isLoading ? "loading" : "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0, //点击次数
      isLoading: false,
      error: "",
    };
  },
  methods: {
    handleClick() {
      this.count++;
      this.error = "";
      this.isLoading = true;
      this.$emit("click", this.count, (err) => {
        //回调函数，让父组件决定执行
        this.isLoading = false;
        this.error = err;
      }); //父组件可能做处理
    },
  },
};
</script>

<style lang="less" scoped></style>
