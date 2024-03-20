<!--
 * @Author: BitCreate
 * @Date: 2024-03-19 21:05:23
-->
<template>
  <swiper @change="changeActiveIndex" :current="activeIndex">
    <swiper-item v-for="(item, index) in labelList" :key="index">
      <ListItem :classify="labelList[index].name"></ListItem>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    labelList: {
      type: Array,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    changeActiveIndex(e) {
      this.$emit("changeActiveIndex", e.detail.current);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100%;
  .swiper-item {
    height: 100%;
    overflow: hidden;
  }
}
</style>
