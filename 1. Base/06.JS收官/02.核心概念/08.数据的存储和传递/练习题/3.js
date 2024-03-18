/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 15:42:48
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 18:32:13
 * @FilePath: \Code\JS收官\02.核心概念\01.数据的存储和传递\练习题\3.js
 */
/**
 * 交换数组两个位置的值
 * @param {Array} arr 数组
 * @param {number} i1 下标1
 * @param {number} i2 下标2
 */
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

swap(arr, 0, 2);

console.log(arr);
