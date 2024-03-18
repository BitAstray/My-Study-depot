<!--
 * @Author: Astray
 * @Date: 2023-06-06 21:28:24
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-08 13:23:00
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
  props: {
    click: Function,
  },
  data() {
    return {
      count: 0, //点击次数
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleClick() {
      this.count++;
      this.error = "";
      this.isLoading = true;
      if (this.click) {
        const result = await this.click(this.count);
        this.isLoading = false;
        this.error = result;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
