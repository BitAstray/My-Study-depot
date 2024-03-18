/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 15:42:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 18:52:14
 * @FilePath: \Code\JS收官\02.核心概念\01.数据的存储和传递\面试题\1.js
 */
// 下面代码输出什么？
var foo = {
  n: 0,
  k: {
    n: 0,
  },
};
var bar = foo.k;
/* 
  foo.k === bar
  bar = {
    n: 0,
  }
 */
bar.n++;
/* 
  foo.k === bar
  bar = {
    n: 1,
  }
 */
bar = {
  n: 10,
};
/* 
  foo.k !== bar
 */
bar = foo;
bar.n++;
/* 
  foo.n = bar.n = 1
 */
bar = foo.n;
// bar = 1
bar++;
// bar = 2
// foo.n = 1
console.log(foo.n, foo.k.n);
/* 
  foo = {
    n: 1,
    k: {
      n: 1,
    },
  }

  bar = 2
*/
console.log(bar);
