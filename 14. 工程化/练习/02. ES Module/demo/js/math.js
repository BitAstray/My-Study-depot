/*
 * @Author: Astray
 * @Date: 2023-05-19 13:48:49
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 14:41:42
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\demo\js\math.js
 */
/*
 * @Author: Astray
 * @Date: 2023-05-19 13:48:49
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 14:36:26
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\demo\js\math.js
 */
// 导出 sum, is Odd

// export function sum(a, b) {
//   return a + b;
// }

// export function isOdd(n) {
//   return n % 2 !== 0;
// }

function sum(a, b) {
  return a + b;
}

function isOdd(n) {
  return n % 2 !== 0;
}

export default {
  sum,
  isOdd,
};
