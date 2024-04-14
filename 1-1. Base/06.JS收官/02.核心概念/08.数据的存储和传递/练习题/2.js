/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 15:42:48
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 18:29:47
 * @FilePath: \Code\JS收官\02.核心概念\01.数据的存储和传递\练习题\2.js
 */
/**
 * 交换对象两个属性的值
 * @param {Object} obj 对象
 * @param {string} key1 属性名1
 * @param {string} key2 属性名2
 */
function swap(obj, key1, key2) {
  var t = obj[key1];
  obj[key1] = obj[key2];
  obj[key2] = t;
}

var obj = {
  a: 1,
  b: 2,
};

swap(obj, "a", "b");

console.log(obj);
