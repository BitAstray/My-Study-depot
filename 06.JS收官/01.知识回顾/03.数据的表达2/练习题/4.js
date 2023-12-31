/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-02-26 13:30:43
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 12:20:52
 * @FilePath: \Code\JS收官\知识回顾\03.数据的表达2\练习题\4.js
 */
/**
 * 打印一个对象的某个属性
 * @param {object} obj 要打印的对象
 * @param {string} key 要打印的对象属性名
 */
function printProperty(obj, key) {
  // 完成该函数
  console.log(obj[key]);
}

var user = {
  name: "monica",
  age: 17,
  sex: "女",
};

printProperty(user, "name"); // 打印：monica
printProperty(user, "age"); // 打印：17
printProperty(user, "sex"); // 打印：女
