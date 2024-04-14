/*
 * @Author: BitCreate BitCreate@qq.com
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 16:37:20
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\练习题\1.js
 */

// toString方法属于Object.prototype，它会把对象转换为字符串的形式 [object Object]
// 这种格式并非每个对象想要的
// 1. 解释数组的toString为什么能得到不同的格式
// 2. 如果自己的构造函数希望改变toString，如何改变

/* 
  1. 数组的toString方法在Array中的原型重写了Object原型中的toString方法
  2. 在自定义的构造函数原型里重写Object的toString方法
*/

var arr = [1, 2, 3, 4];
console.log(arr.toString());

function User() {}

User.prototype.toString = function () {
  return "在自定义函数中重写的toString方法";
};

var user = new User();
console.log(user.toString());
