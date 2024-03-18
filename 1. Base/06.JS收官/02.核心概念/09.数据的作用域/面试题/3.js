/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 19:12:56
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 20:28:35
 * @FilePath: \Code\JS收官\02.核心概念\09.数据的作用域\面试题\3.js
 */
// 下面的代码输出什么？(百度)

var a = 1;

function m1() {
  a++;
}

function m2() {
  var a = 2;
  m1();
  console.log(a); // 2
}

m2();
console.log(a); // 2
