/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 14:26:17
 * @FilePath: \Code\09. JavaScript语言提升\10. Promise相关面试题\8.js
 */
var a;
var b = new Promise((resolve, reject) => {
  console.log("promise1");
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise3");
  })
  .then(() => {
    console.log("promise4");
  });

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log("after1");
  await a;
  resolve(true);
  console.log("after2");
});

console.log("end");

/* 
  ? a = undefined;
  promise1
  ? b = pending
  undefined
  ? a = pending
  end

  promise2
  promise3
  promise4
  ? b = fulfilled<undefined>
  pending
  after1

*/
