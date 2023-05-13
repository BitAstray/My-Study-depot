/*
 * @Author: BitCreate
 * @Date: 2022-10-15 12:49:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 17:12:19
 * @FilePath: \Code\Code\JS收官\02.核心概念\14. 原型链\面试题\1.js
 */
// 下面的代码输出什么？
function User() {}
User.prototype.sayHello = function () {};

var u1 = new User();
var u2 = new User();

console.log(u1.sayHello === u2.sayHello); // true
console.log(User.prototype === Function.prototype); //false
console.log(User.__proto__ === Function.prototype); // true
console.log(User.__proto__ === Function.__proto__); // true
console.log(u1.__proto__ === u2.__proto__); //true
console.log(u1.__proto__ === User.__proto__); // false
console.log(Function.__proto__ === Object.__proto__); //true
console.log(Function.prototype.__proto__ === Object.prototype.__proto__); //fasse
console.log(Function.prototype.__proto__ === Object.prototype); //ture
