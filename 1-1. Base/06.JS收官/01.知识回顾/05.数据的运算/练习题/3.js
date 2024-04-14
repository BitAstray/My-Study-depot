/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 14:31:47
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 17:15:04
 * @FilePath: \Code\JS收官\知识回顾\05.数据的运算\练习题\3.js
 */
/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

  输出 正常、偏瘦、偏胖
*/
var height = 185, // 身高（厘米）
  weight = 100; // 体重（千克）

height = height / 100;
var bmi = weight / (height / 100) ** 2;
console.log(bmi);
console.log(bmi > 25 ? "偏胖" : bmi >= 20 ? "正常" : "偏瘦");
