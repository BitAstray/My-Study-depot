/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 14:31:47
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 16:26:30
 * @FilePath: \Code\JS收官\知识回顾\05.数据的运算\练习题\1.js
 */
/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

function sum(a, b) {
  // code here
  a = +a || 0;
  // console.log(a);
  b = +b || 0;
  // console.log(b);
  return a + b;
}

console.log(sum("123", "0"));
