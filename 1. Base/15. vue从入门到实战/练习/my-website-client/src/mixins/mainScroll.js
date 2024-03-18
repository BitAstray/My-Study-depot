/*
 * @Author: Astray
 * @Date: 2023-06-10 21:26:30
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 17:28:35
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\mixins\mainScroll.js
 */
export default function (refValue) {
  return {
    mounted() {
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll", undefined);
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
    },
  };
}
