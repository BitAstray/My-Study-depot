/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 13:51:37
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\4.js
 */
async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

// function m() {
//   return Promise.resolve(1).then((n) => {
//     console.log(n);
//   });
// }

m();
console.log(2);

/* 
  0
  微队列: fn1
  2

  结果：
  0
  2
  1
*/
