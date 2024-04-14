/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-03 21:41:57
 * @FilePath: \Code\09. JavaScript语言提升\07. Promise的链式调用\练习题\p5.js
 */
// 下面的代码输出什么

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
});

const promise2 = promise1.catch(() => {
  return 2;
});

console.log("promise1", promise1); //pending
console.log("promise2", promise2); //pending

setTimeout(() => {
  console.log("promise1", promise1); //rejected<undefined>
  console.log("promise2", promise2); //fulfilled<2>
}, 2000);
