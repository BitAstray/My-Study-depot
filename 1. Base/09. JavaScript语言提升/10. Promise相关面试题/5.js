/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 13:58:50
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\5.js
 */
async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

(async () => {
  await m();
  console.log(2);
})();

console.log(3);

/* 
  微队列: fn1
  0
  微队列: fn1 fn2
  3

  结果:
  0
  3
  1
  2
*/
