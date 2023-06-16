/*
 * @Author: Astray
 * @Date: 2023-05-29 16:26:44
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 22:11:21
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";

if (!window.VueRouter) {
  Vue.use(VueRouter); //使用一个vue插件
}

const router = new VueRouter({
  // 配置
  routes,
  mode: "history",
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
