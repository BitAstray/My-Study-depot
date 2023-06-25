<!--
 * @Author: Astray
 * @Date: 2023-06-06 14:40:27
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-10 17:30:25
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Blog\components\BlogTOC.vue
-->
<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList
      :list="tocWithSelect"
      @selected="handleSelected"
    />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelected(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect(scroolDom) {
      if (!scroolDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        // 当前dom是否应该被选中
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top < range) {
          // 在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定范围下方
          return;
        } else {
          // 在规定范围上方
          this.activeAnchor = dom.id; //假设自己是激活的
        }
      }
    },
  },
  computed: {
    // 根据toc得到带有isSelecte的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    // 根据toc得到他们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc = []) => {
        for (const t of toc) {
          doms.push(document.querySelector("#" + t.anchor));
          if (t.children && t.children.length > 0) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
