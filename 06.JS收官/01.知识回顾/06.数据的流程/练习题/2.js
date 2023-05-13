/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 17:17:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-03 10:59:38
 * @FilePath: \Code\JS收官\知识回顾\06.数据的流程\练习题\2.js
 */
/* 
1. 输出1-100的所有奇数
*/
for (var i = 1; i <= 100; i++) {
  i % 2 && console.log(i);
}
/* 
2. 定义一个数组，输出数组中所有的奇数
*/
var arr = [1, 50, 5, 7, 2, 20, 222, 777];

for (var i = 0; i < arr.length; i++) {
  arr[i] % 2 && console.log(arr[i]);
}
/* 
/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/
var arr = [1, 50, 5, 7, 2, 20, 222, 777];
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arr2.push(arr[i]);
  }
}

console.log(arr2);
