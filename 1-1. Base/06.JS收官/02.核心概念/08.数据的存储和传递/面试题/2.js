/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 15:42:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 19:07:22
 * @FilePath: \Code\JS收官\02.核心概念\01.数据的存储和传递\面试题\2.js
 */
// 下面的代码输出什么（京东）？
var foo = {
  n: 1,
};

var arr = [foo];
// arr = [{n:1}]

function method1(arr) {
  var bar = arr[0];
  // bar === foo
  arr.push(bar);
  // arr.length = 2;
  bar.n++;
  // foo.n = 2;
  arr = [bar];
  // arr.length = 1
  arr.push(bar);
  // arr.length = 2
  arr[1].n++;
  // arr = [{n:3}, {n:3}] === [foo, foo]
  // foo.n = 3
}
function method2(foo) {
  foo.n++;
}
function method3(n) {
  n++;
}
method1(arr);
// arr.length = 2;
// foo = {n:3}
method2(foo);
// foo = {n:4}
method3(foo.n);

console.log(foo.n, arr.length);
// 4, 2

// console.log(arr);
