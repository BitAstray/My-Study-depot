/*
 * @Author: Astray
 * @Date: 2023-06-16 15:41:29
 */
import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import { getToken } from "./utils/auth";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // 本地用户信息
  const hasGetUserInfo = store.getters.user;

  if (to.meta.auth) {
    // 需要鉴权
    if (hasGetUserInfo) {
      // 有用户信息
      next();
    } else {
      // 没有用户信息
      const hasToken = getToken("adminToken");
      if (hasToken) {
        // 验证token
        try {
          await store.dispatch("user/getInfo");
          next();
          NProgress.done();
        } catch (error) {
          await store.dispatch("user/resetToken");
          Message.error(error);
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      } else {
        // 跳转登录
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    // 白名单
    if (to.path === "/login" && hasGetUserInfo) {
      next("/");
    } else {
      next();
    }
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
