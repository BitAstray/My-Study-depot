/*
 * @Author: BitCreate
 * @Date: 2024-03-25 15:24:32
 */
import App from "./App";

// #ifndef VUE3
import Vue from "vue";
import "./uni.promisify.adaptor";
import module from "./api";
import store from "./store";
import commonMixin from "./common/commonMixin";
import { router, RouterMount } from "./router";
Vue.use(commonMixin);
Vue.use(router);
Vue.config.productionTip = false;
Vue.prototype.$http = module;
App.mpType = "app";
const app = new Vue({
  ...App,
  store,
});
// #endif

// #ifdef H5
RouterMount(app, router, "#app");
// #endif

// #ifndef H5
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
