/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 17:17:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-03 10:49:04
 * @FilePath: \Code\JS收官\知识回顾\06.数据的流程\练习题\1.js
 */
/* 
1. 输出100个hello world
*/
for (var i = 0; i < 100; i++) {
  console.log("hello world");
}
/* 
2. 输出100~200
*/
for (var i = 100; i <= 200; i++) {
  console.log(i);
}
/* 
3. 创建一个包含1~100的数组
*/
var arr = [];
for (var i = 0; i < 100; i++) {
  arr.push(i + 1);
}
console.log(arr);
/* 
4. 定义一个数组，遍历输出它的每一项
*/

var arr = ["Create", "Astray", 9999, "0407", "Test"];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
