/*
 * @Author: BitCreate
 * @Date: 2024-03-04 20:29:58
 */
//? 函数柯里化 函数反柯里化

//* 判断变量的类型
/* 
  常用的判断类型的方法
  1. typeof 不能判断对象类型 typeof [] => 'object' typeof {} => 'object'
  2. constructor 可以找到这个变量是通过谁构造出来的
  3. instanceof 判断谁是谁的实例 __proto__
  4. Object.prototype.toString.call()  [object Array] [object Object] 不能细分谁是谁的实例
 */

function isType(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}
//? 能不能将方法进行细分 isType => isString isArray
// console.log(isType([], "Array"));

// function isType(type) {
//   return function (value) {
//     return Object.prototype.toString.call(value) === `[object ${type}]`;
//   };
// }

//? 如何实现一个通用的柯里化函数

const currying = (fn, arr = []) => {
  // 函数的参数个数
  let len = fn.length;
  return function (...args) {
    // 高阶函数
    let concatValue = [...arr, ...args];
    if (arr.length < len) {
      return currying(fn, arr); // 递归不停的产生函数
    } else {
      return fn(...concatValue);
    }
  };
};
let isArray = currying(isType)("Array");
let isString = currying(isType)("String");

console.log(isArray([]));
console.log(isString("hello"));

// function sum(a, b, c, d, e, f) {
//   return a + b + c + d + e + f;
// }

// let r = currying(sum)(1, 2)(3, 4)(5, 6);
