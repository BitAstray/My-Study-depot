/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 17:17:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-03 11:22:14
 * @FilePath: \Code\JS收官\知识回顾\06.数据的流程\练习题\3.js
 */
/* 
1. 1~100求和
*/
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
/* 
2. 求某个数的阶乘
*/

var factorial = 1;
var n = 10;
for (var i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);
/* 
3. 数组求和
*/

var nums = [15, 35, 55, 123, 88];
var sumNums = 0;
for (var i = 0; i < nums.length; i++) {
  sumNums += nums[i];
}
console.log(sumNums);

/* 
4. 求数组中的奇数的个数
*/
var nums = [15, 35, 55, 123, 88, 20, 18, 77];
var count = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    count++;
  }
}
console.log(count);
/* 
5. 求数组中的奇数和
*/
var oddSum = 0;
var nums = [15, 35, 55, 123, 88, 20, 18, 77];
for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    oddSum += nums[i];
  }
}
console.log(oddSum);
