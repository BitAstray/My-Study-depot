/*
 * @Author: Astray
 * @Date: 2023-05-25 19:52:01
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 21:58:41
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\main.js
 */
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import vLoading from "@/directives/loading";
import vLazy from "@/directives/lazy";
import store from "@/store";
store.dispatch("setting/fetchSetting");
import "./eventBus";
Vue.prototype.$showMessage = showMessage;
// Vue.prototype.$bus = new Vue({});
// 注册全局指令
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
