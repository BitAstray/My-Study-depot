/*
 * @Author: Astray
 * @Date: 2023-05-19 13:48:49
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 15:48:15
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\练习题2\test.js
 */
/* 
{
  a: 1,
  b: 2,
  c: function() {},
  default: {
    a: 1,
    b: 2
  }
}
*/

export const a = 1;
export const b = 2;
export const c = function () {};

export default {
  a: 1,
  b: 2,
};
