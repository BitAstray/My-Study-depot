/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 12:27:40
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 12:50:21
 * @FilePath: \Code\JS收官\知识回顾\04.数据的表达3\练习题\2.js
 */
/* 
邓哥，81岁，爱好香菜、秋葵、遛鸟
成哥，30岁，爱好扯淡、找邓嫂
monica，17岁，爱好奶茶、唱歌

用字面量描述上面的信息

思考：
1. 如何得到平均年龄
2. 如何得到所有人所有爱好的总数
*/

var veterinarian = [
  { name: "邓哥", age: 81, hobbys: ["香菜", "秋葵", "遛鸟"] },
  { name: "成哥", age: 30, hobbys: ["扯淡", "邓嫂"] },
  { name: "monica", age: 17, hobbys: ["奶茶", "唱歌"] },
];

// console.log(veterinarian[0].hobbys.length);
// 平均年龄
var aver = 0;
// 爱好总数
var sum = 0;

for (var i = 0; i < veterinarian.length; i++) {
  aver += veterinarian[i].age;
  sum += veterinarian[i].hobbys.length;
}

console.log(aver / 3);
console.log(sum);
