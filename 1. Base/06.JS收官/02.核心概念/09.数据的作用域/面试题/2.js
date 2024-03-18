/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 19:12:56
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 20:07:06
 * @FilePath: \Code\JS收官\02.核心概念\02.数据的作用域\面试题\2.js
 */
// 下面的代码输出什么

var a = 1,
  b = 2;

function m1() {
  console.log(a); //undefined
  var a = 3;
  function m2() {
    console.log(a, b); //3 2
  }
  m2();
}

m1();
