/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 17:17:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 13:53:33
 * @FilePath: \Code\JS收官\知识回顾\06.数据的流程\练习题\5.js
 */
/* 
1. 输出一个对象的所有键值对
*/
var obj = {
  a: 1,
  b: 2,
  c: "test",
};

for (var key in obj) {
  console.log(key + "=" + obj[key]);
}
/* 
2. 计算对象中字符串属性的数量
*/
var obj = {
  a: 1,
  b: 2,
  c: "test",
  d: "abc",
  f: [1, 2],
};
var count = 0;

for (var key in obj) {
  if (typeof obj[key] === "string") {
    count++;
  }
}
console.log(count);
/* 
3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/

var obj = {
  name: "xxx",
  balance: 199.8, //余额
  taken: 3000, //消费
};
var newObj = {};
for (var key in obj) {
  if (typeof obj[key] === "number") {
    newObj[key] = "￥" + obj[key];
  } else {
    newObj[key] = obj[key];
  }
}
console.log(newObj);

/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/
var nums = [1, 2, 3];
var newNums = [];
for (var i = 0; i < nums.length; i++) {
  newNums.push({ number: nums[i], doubleNumber: nums[i] * 2 });
}
console.log(newNums);
