/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 13:39:05
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\2.js
 */
setTimeout(() => {
  console.log(1);
});

const promise = new Promise((resolve, reject) => {
  console.log(2);
  resolve();
});

promise.then(() => {
  console.log(3);
});

console.log(4);

/* 
  2 4
  微队列: fn3
  宏队列: fn1

  结果:
  2
  4
  3
  1
*/
