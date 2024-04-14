/*
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 17:42:11
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\router\routes.js
 */
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import User from "../views/User.vue";
import Loading from "../views/Loading.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  { path: "/login", component: Login },
  { path: "/loading", component: Loading },
  {
    path: "/news",
    component: News,
    meta: {
      auth: true,
    },
  },
  {
    path: "/user",
    component: User,
    meta: {
      auth: true,
    },
  },
];
