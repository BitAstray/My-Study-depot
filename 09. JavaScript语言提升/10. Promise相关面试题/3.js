/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 13:44:19
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\3.js
 */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
});
const promise2 = promise1.catch(() => {
  return 2;
});

console.log("promise1", promise1);
console.log("promise2", promise2);

setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

/* 
  pending pending
  rejected<undefined> fulfilled<2>
*/
