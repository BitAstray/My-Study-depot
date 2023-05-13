/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-03 21:48:50
 * @FilePath: \Code\09. JavaScript语言提升\07. Promise的链式调用\练习题.1\p3.js
 */
// 下面代码的输出结果是什么

const pro = new Promise((resolve, reject) => {
  resolve();
})
  .then((res) => {
    console.log(res.toString()); // 报错
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res); //3
  });

setTimeout(() => {
  console.log(pro); // fulfilled<undefined>
}, 1000);
