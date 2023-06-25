/*
 * @Author: Astray
 * @Date: 2023-06-08 14:50:37
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-12 14:21:14
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\eventBus.js
 */
// const listeners = {};

// export default {
//   // 监听某一个事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   // 取消监听某一个事件
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   // 触发事件
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };

import Vue from "vue";
const app = new Vue();
Vue.prototype.$bus = app;

export default app;
