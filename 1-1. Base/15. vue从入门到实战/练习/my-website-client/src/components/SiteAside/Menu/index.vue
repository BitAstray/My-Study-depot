<!--
 * @Author: Astray
 * @Date: 2023-05-27 21:36:10
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-29 17:11:16
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\SiteAside\Menu\index.vue
-->
<template>
  <ul class="menu-container">
    <li
      v-for="item in items"
      :key="item.link"
    >
      <router-link
        :to="{ name: item.name }"
        :exact="item.exact"
        active-class="selected"
        exact-active-class=""
      >
        <Icon :type="item.icon" />
        <span>{{ item.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          icon: "home",
          text: "首页",
          exact: true,
        },
        {
          name: "Blog",
          icon: "blog",
          text: "文章",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          icon: "about",
          text: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          text: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "chat",
          text: "留言板",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.menu-container {
  width: 100%;
  color: @gray;
  margin: 24px 0;
  padding: 0;
  a {
    display: block;
    padding: 0 50px;
    height: 45px;
    line-height: 45px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background-color: darken(@dark, -10%);
    }
  }
  span {
    margin-left: 8px;
  }
}
</style>
