/*
 * @Author: Astray
 * @Date: 2023-06-14 21:24:06
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 21:52:01
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\store\index.js
 */
import { Store, install } from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

if (!window.Vuex) {
  install(Vue); //使用一个vue插件
}

const store = new Store({
  modules: {
    about,
    banner,
    setting,
    project,
  },
});

export default store;
