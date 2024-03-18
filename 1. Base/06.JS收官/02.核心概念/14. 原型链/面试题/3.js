/*
 * @Author: BitCreate
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 17:18:33
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\面试题\3.js
 */
// 下面的代码输出什么？（京东）
Function.prototype.a = 1;
Object.prototype.b = 2;

function A() {}

var a = new A();

console.log(a.a, a.b); // undefine , 2
console.log(A.a, A.b); // 1 , 2
