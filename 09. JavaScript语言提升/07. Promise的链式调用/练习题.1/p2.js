/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-03 21:46:52
 * @FilePath: \Code\09. JavaScript语言提升\07. Promise的链式调用\练习题.1\p2.js
 */
// 下面代码的输出结果是什么

const pro = new Promise((resolve, reject) => {
  resolve(1);
})
  .then((res) => {
    console.log(res); // 1
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res); //2
  });

setTimeout(() => {
  console.log(pro); //fulfilled<undefined>
}, 1000);
