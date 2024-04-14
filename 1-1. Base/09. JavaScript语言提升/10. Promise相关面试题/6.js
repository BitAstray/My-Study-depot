/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 14:10:10
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\6.js
 */
async function m1() {
  return 1;
}

async function m2() {
  const n = await m1();
  console.log(n);
  return 2;
}

async function m3() {
  const n = m2();
  console.log(n);
  return 3;
}

m3().then((n) => {
  console.log(n);
});

m3();

console.log(4);

/* 
  pending 
  微队列:fn1 fn3
  pending
  微队列:fn1 fn3 fn1
  4

  结果:
  pending
  pending
  4
  1
  3
  1
*/
