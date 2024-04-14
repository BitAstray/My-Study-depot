<!--
 * @Author: Astray
 * @Date: 2023-05-29 15:58:25
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 21:42:51
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Home\index.vue
-->
<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li
        v-for="(item, i) in data"
        :key="item.id"
      >
        <CarouselItem
          :carousel="item"
          ref="carouselItem"
        />
      </li>
    </ul>

    <div
      class="icon icon-up"
      v-show="index > 0"
      @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  data() {
    return {
      containerHeight: 0, //容器高度
      switching: false, //是否正在切换中
      index: 0,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < 0 && this.index > 0) {
        this.switchTo(this.index - 1);
        this.switching = true;
      } else if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.switchTo(this.index + 1);
        this.switching = true;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  ul {
    margin: 0;
    padding: 0;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    @gap: 25px;
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
    @size: 7px;
    .self-center();
    transform: translate(-50%);
    left: auto;
    right: 20px;
    li {
      width: @size;
      height: @size;
      border: 1px solid #fff;
      border-radius: 50%;
      cursor: pointer;
      background-color: @words;
      transition: 0.5s;
      margin-bottom: 10px;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
