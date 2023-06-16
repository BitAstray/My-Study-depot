<!--
 * @Author: Astray
 * @Date: 2023-06-02 13:52:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-06 15:55:08
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\views\Blog\components\RightList.vue
-->
<template>
  <ul class="right-list-container">
    <li
      v-for="(item, i) in list"
      :key="i"
    >
      <span
        :class="{ selected: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.name }}</span
      >
      <span
        v-if="item.aside"
        :class="{ selected: item.isSelect }"
        class="aside"
        >{{ item.aside }}</span
      >
      <!-- 显示当前组件 -->
      <RightList
        :list="item.children"
        @selected="handleClick"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    /* [{
      neme:"xxx", 
      isSelect:true ,
      children: [{neme:"xxx",isSelect:false}]
    }] */
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.right-list-container {
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    span.selected {
      color: @warn;
      font-weight: bold;
    }
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    span:hover {
      color: @warn;
    }
  }
}
</style>
