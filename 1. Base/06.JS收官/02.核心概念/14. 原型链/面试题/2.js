/*
 * @Author: BitCreate
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 17:16:27
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\面试题\2.js
 */
// 下面的代码输出什么？（字节）
console.log({} instanceof Object); //true
console.log({}.toString instanceof Function); //true
console.log(Object instanceof Function); //true
console.log(Function instanceof Object); //true
