/*
 * @Author: BitCreate
 * @Date: 2023-03-14 18:59:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-14 19:41:55
 * @FilePath: \Code\Code\JS收官\03.标准库\17.数学\练习题\3.js
 */
/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
  return arr[getRandom(0, arr.length)];
}

/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [1, 2, 3, 4, 5, 6];

console.log(getRandomItem(arr));
