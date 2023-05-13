/*
 * @Author: BitCreate
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 17:08:13
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\练习题\3.js
 */
// 创建一个没有隐式原型的用户对象，随意添加一些属性

var noProto = Object.create({
  a: "test",
});

console.log(noProto);
console.log(noProto.a);
console.log(noProto.__proto__);

Object.setPrototypeOf(noProto, {
  b: "test",
});

console.log(noProto);
console.log(noProto.b);
console.log(noProto.__proto__);
