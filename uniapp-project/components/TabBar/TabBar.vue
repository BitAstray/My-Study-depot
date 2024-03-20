<!--
 * @Author: BitCreate
 * @Date: 2024-03-19 19:37:10
-->
<template>
  <view class="tab">
    <!-- 滚动区域 -->
    <scroll-view scroll-x class="tab-scroll" scroll-with-animation :scroll-into-view="currentIndex">
      <view class="tab-scroll-box">
        <view
          :class="{ active: activeIndex === index }"
          class="tab-scroll-item"
          v-for="(item, index) in labelList"
          :key="item.id"
          :id="`item${index}`"
          @click="changeActiveIndex(index)"
        >
          {{ item.name }}
        </view>
      </view>
    </scroll-view>
    <!-- 图标部分 -->
    <view class="tab-icon">
      <uni-icons type="gear" color="#666" size="26" />
    </view>
  </view>
</template>

<script>
export default {
  name: "TabBar",
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
  computed: {
    currentIndex() {
      return `item${this.activeIndex}`;
    },
  },
  methods: {
    changeActiveIndex(index) {
      this.$emit("changeActiveIndex", index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/TabBar.scss";
</style>
