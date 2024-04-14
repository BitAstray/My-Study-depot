/*
 * @Author: BitCreate
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 16:54:05
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\练习题\2.js
 */
var arr1 = [1, 2, 3, 4]; // 真数组
// 类数组(伪数组)
var arr2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};

// 判断arr1和arr2是否是真数组
console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);
