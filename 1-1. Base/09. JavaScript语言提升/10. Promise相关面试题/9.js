/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 14:29:27
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\9.js
 */
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/* 
  * script start
  宏队列: clg<"setTimeout">
  * asycn1 start
  * asycn2
  微队列: clg<"async1 end">
  * promise1
  微队列: clg<"async1 end"> clg<"promise2">
  *script end
  *async1 end
  *promise2
  *setTimeout
*/
