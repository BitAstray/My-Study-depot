/*
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 18:32:27
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\router\index.js
 */
import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";
import store from "../store";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  // 每当导航切换时(包含刷新)
  // from: 之前路由对象
  // to: 即将进入的路由对象
  // next: 确认导航的对象,直接进入to, 传参则进入新的导航
  if (to.meta.auth) {
    // 需要鉴权
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      // 加载中, 无法确定登录
      next({
        path: "/loading",
        query: {
          returnUrl: to.fullPath,
        },
      });
    } else if (status === "login") {
      // 已登录
      next();
    } else {
      // 未登录
      alert("请登录后访问!");
      next({
        path: "/login",
        query: { returnUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
