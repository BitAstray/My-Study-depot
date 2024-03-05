/*
 * @Author: BitCreate
 * @Date: 2024-03-03 12:28:43
 */
//* var 要求全部改用const let

//* 1) var 声明的变量(污染全局变量)
// var a = 1;
// console.log(window.a);

//* 2) var 导致变量提升问题
// console.log(a); // function var
// var a = 1;

//* 3) var 可以重复声明 let可以解决重复定义的问题
// var a = 1;
// var a = 2;
// var a = 3;
// console.log(a);

//* 4) let作用域的问题 (常见的作用域 全局作用域 函数作用域 块级作用域)
// {
//   let a = 1;
// }
// console.log(a);

// let a = 100;
// {
//   console.log(a); // 暂存死区
//   let a = 200;
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//* 5) const 常量声明 (地址不变即可)
// const PI = "3.14";
// PI = 3.15; // 报错

// const PI = { r: "3.14" };
// PI.r = 3.15; // 不报错
