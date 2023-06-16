<!--
 * @Author: Astray
 * @Date: 2023-05-27 17:53:33
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-27 18:44:04
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\ImageLoader\test.vue
-->
<template>
  <ImageLoader
    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    :duration="5000"
    @load="loadComplete()"
  />
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    loadComplete() {
      console.log("子组件原图加载完成");
    },
  },
};
</script>

<style lang="less" scoped>
.image-loader-container {
  margin: 10px auto;
  width: 500px;
  height: 400px;
}
</style>
