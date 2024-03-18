/*
 * @Author: Astray
 * @Date: 2023-05-25 17:55:32
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-25 18:05:41
 * @FilePath: \Code\15. vue从入门到实战\练习\04. 组件\src\main.js
 */
// 入口文件

import Vue from "./vue.browser.js";
import App from "./App.js";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
