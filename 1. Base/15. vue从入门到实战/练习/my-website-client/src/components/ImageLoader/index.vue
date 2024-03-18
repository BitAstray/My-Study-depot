<!--
 * @Author: Astray
 * @Date: 2023-05-27 17:53:25
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-27 18:49:45
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\ImageLoader\index.vue
-->
<template>
  <div class="image-loader-container">
    <img
      class="placeholder"
      v-if="!overLoad"
      :src="placeholder"
    />
    <img
      @load="loadComplete()"
      :style="{
        opacity: srcOpacity,
        transition: duration + 'ms',
      }"
      class="src"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcLoaded: false,
      overLoad: false,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    srcOpacity() {
      return this.srcLoaded ? 1 : 0;
    },
  },
  methods: {
    loadComplete() {
      this.srcLoaded = true;
      setTimeout(() => {
        this.overLoad = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
