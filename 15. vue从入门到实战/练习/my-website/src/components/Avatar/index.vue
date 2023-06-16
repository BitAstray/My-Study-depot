<!--
 * @Author: Astray
 * @Date: 2023-05-25 20:12:13
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-28 17:32:20
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\Avatar\index.vue
-->
<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url 必须是字符串类型
      required: true, //必须接收的属性
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped>
/* 带有作用域的标记 */
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 5px rgba(255, 255, 255);
}
</style>
