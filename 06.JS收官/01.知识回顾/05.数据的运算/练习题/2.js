/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 14:31:47
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 16:31:41
 * @FilePath: \Code\JS收官\知识回顾\05.数据的运算\练习题\2.js
 */
/* 
  不使用if，判断一个年份是否是闰年，输出是或否

  闰年规则：
  1. 4年一闰，百年不闰
  2. 400年必闰
  上述两点满足其一即可
*/
var year = 2000;

// 判断变量year是否是闰年
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "是" : "否"
);
