/*
 * @Author: BitCreate
 * @Date: 2024-03-04 21:35:00
 */
//? promise 的特点以及概念
//* https://promisesaplus.com/ promisea+ 规范 都通过这个规范来实现

//? promise 为什么会产生 解决异步问题

//* 1. 多个异步请求并发 (希望同步最终的结果) Promise.all
//* 2. 回调地狱问题 (解决这个问题)
//* 3. 缺陷：还是基于回调的

let Promise = require("./promise");

let p = new Promise((resolve, reject) => {
  resolve("成功");
});

let p2 = p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(2000);
          }, 1000);
        })
      );
    }, 1000);
  });
});

p2.then(
  data => {
    console.log("success", data);
  },
  err => {
    console.log("fail", err);
  }
);
