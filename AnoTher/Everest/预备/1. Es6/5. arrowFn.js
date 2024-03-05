/*
 * @Author: BitCreate
 * @Date: 2024-03-04 12:58:31
 */

//* 箭头函数 没有this 没有arguments 没有prototype

// let a = function (x, y) {
//   return { total: x + y };
// };
// console.log(a(1, 2));

// let b = (x, y) => ({ total: x + y });
// console.log(b(1, 2));

// let a = function (x) {
//   return function (y) {
//     return x + y;
//   };
// };
// console.log(a(1)(2));

// let b = x => y => x + y;
// console.log(b(1)(2));

//* this的问题 看.前面是谁this就是谁
let a = 1;
let obj = {
  a: 2,
  fn: () => {
    setTimeout(() => {
      console.log(this.a);
    });
  },
};
obj.fn();
