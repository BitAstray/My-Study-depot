/*
 * @Author: Astray
 * @Date: 2023-06-14 13:57:21
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 15:47:32
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\store\index.js
 */
import Vuex from "vuex";
import Vue from "vue";
import loginUser from "./loginUser";
import counter from "./counter";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, //严格模式，只允许通过mutations改变状态
  modules: {
    counter,
    loginUser,
  },
});

window.store = store;

export default store;
