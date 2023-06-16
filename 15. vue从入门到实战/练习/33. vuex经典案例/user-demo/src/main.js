/*
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 17:19:40
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

store.dispatch("loginUser/whoAmI");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
