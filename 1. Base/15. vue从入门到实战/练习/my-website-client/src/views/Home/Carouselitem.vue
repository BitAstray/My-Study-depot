<!--
 * @Author: Astray
 * @Date: 2023-05-31 14:02:21
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-01 20:25:48
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Home\Carouselitem.vue
-->
<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div
      class="car-img"
      :style="imagePosition"
      ref="img"
    >
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="this.showWords"
      />
    </div>
    <div
      class="title"
      ref="title"
    >
      {{ carousel.title }}
    </div>
    <div
      class="desc"
      ref="desc"
    >
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器尺寸
      innerSize: null, //内层图片尺寸
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    // 得到图片坐标
    imagePosition() {
      if (this.innerSize || this.containerSize) {
        const extraWidth = this.innerSize.width - this.containerSize.width;
        const extraHeight = this.innerSize.height - this.containerSize.height;
        const left = (-extraWidth / this.containerSize.width) * this.mouseX;
        const top = (-extraHeight / this.containerSize.height) * this.mouseY;
        return {
          transform: `translate(${left}px,${top}px)`,
        };
      }
      return undefined;
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.setSize();
    window.addEventListener("resize", this.setSize);
    this.handleMouseleave();
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    // 显示文字
    showWords() {
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;

      this.$refs.title.style.opacity = 1;
      this.$refs.desc.style.opacity = 1;

      // reflow
      this.$refs.title.clientWidth;
      this.$refs.desc.clientWidth;

      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientWidth,
      };

      this.innerSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientWidth,
      };
    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseleave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .car-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    top: calc(50% - 40px);
    font-size: 2em;
    letter-spacing: 5px;
    transition: 1s;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    transition: 2s 1s;
    color: lighten(@gray, 20%);
  }
}
</style>
