/*
 * @Author: BitCreate
 * @Date: 2024-03-04 13:48:47
 */
//* 数组的方法
//* es5 forEach map filter some every reduce reduceRight
//* es6 find findIndex
//* es7 includes

//* reduce 收敛
//* 求和
// let sum = [
//   { price: 100, count: 1 },
//   { price: 200, count: 2 },
//   { price: 3, count: 3 },
// ].reduce((a, b) => {
//   return a + b.price * b.count;
// }, 0);
// console.log(sum);

//* reduce常见用法 多个数据合并成一个数据
// let keys = ["name", "age"];
// let values = ["zhangsan", 18]; // {name: 'zhangsan', age: 18}
// let obj = keys.reduce((a, b, index) => {
//   a[b] = values[index];
//   return a;
// }, {});
// console.log(values);

//* reduce redux compose 方法(组合多个函数)

function sum(a, b) {
  return a + b;
}

function toUpper(str) {
  return str.toUpperCase();
}

function add(str) {
  return "*****" + str + "*****";
}

// function compose(...fns) {
//   return function (...args) {
//     let lastFn = fns.pop();
//     return fns.reduceRight((prev, next) => {
//       return next(prev);
//     }, lastFn(...args));
//   };
// }

// let compose =
//   (...fns) =>
//   (...args) =>
//     fns.reduceRight((prev, next) => next(prev), fns.pop()(...args));

// let compose = (...fns) =>
//   fns.reduce(
//     (a, b) =>
//       (...args) =>
//         a(b(...args))
//   );

// let r = compose(add, toUpper, sum)("hello", "world");
// console.log(r);

//* 手写reduce

// Array.prototype.reduce = function (callback, prev) {
//   for (let i = 0; i < this.length; i++) {
//     if (typeof prev === "undefined") {
//       prev = callback(this[i], this[i + 1], i + 1, this);
//       i++;
//     } else {
//       prev = callback(prev, this[i], i, this);
//     }
//   }
//   return prev;
// };

// let r = [1, 2, 3].reduce((prev, next, index, arr) => {
//   return prev + next;
// }, 0);

// console.log(r);

//* map 映射 filter 过滤 some every find findIndex
