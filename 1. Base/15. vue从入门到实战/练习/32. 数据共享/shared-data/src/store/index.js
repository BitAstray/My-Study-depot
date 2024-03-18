/*
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-12 16:47:18
 * @FilePath: \Code\15. vue从入门到实战\练习\32. 数据共享\shared-data\src\store\index.js
 */

// 数据长裤模块
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); //应用vuex插件

const store = new Vuex.Store({
  // 仓库配置对象
  state: {
    count: 0, //默认值为0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
  },
  actions: {
    asyncIncrease(ctx) {
      setTimeout(() => ctx.commit("increase"), 1000);
    },
    asyncDecrease(ctx) {
      setTimeout(() => ctx.commit("decrease"), 1000);
    },
  },
});

export default store;
