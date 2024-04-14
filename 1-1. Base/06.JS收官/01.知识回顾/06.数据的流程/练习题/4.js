/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 17:17:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 13:39:55
 * @FilePath: \Code\JS收官\知识回顾\06.数据的流程\练习题\4.js
 */
/* 
1. 数组中是否存在某个数，输出 是 或 否
*/

var arr = [12, 20, 55, 100, 200, 554, 2023, 40];
var num = 2023;
var flag = "否";
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    flag = "是";
    break;
  }
}
console.log(flag);

/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/

var arr = [12, 20, 55, 100, 200, 554, 2023, 40];
var num = 2023;
var flag = -1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    flag = i;
    break;
  }
}
console.log(flag);

/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/

var arr = [12, 20, 55, 100, 201, 554, 2023, 40];
var sum = [];
// 统计数组中的奇数个数
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sum.push(arr[i]);
  }
}
if (sum.length >= 2) {
  // 输出第一个和最后一个奇数的值
  console.log(sum[0] + sum[sum.length - 1]);
} else {
  console.log("没有两个奇数");
}

/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/

var arr1 = [12, 20, 55, 100, 200, 554, 2023, 40];
var arr2 = [10, 20, 30];
var flag1 = 0;
var flag2 = 0;
// 第一个数组中有没有奇数
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 !== 0) {
    flag1 = 1;
    break;
  }
}
// 第二个数组中有没有奇数
for (var i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 !== 0) {
    flag2 = 1;
    break;
  }
}
if (flag1 && flag2) {
  console.log("是");
} else {
  console.log("否");
}
