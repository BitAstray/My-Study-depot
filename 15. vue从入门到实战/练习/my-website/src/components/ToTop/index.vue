<template>
  <div
    class="to-top-container"
    v-show="show"
    @click="handleClick"
  >
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      if (dom.scrollTop > dom.clientHeight) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.to-top-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 99;
  background-color: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 3px #000;
}
</style>
