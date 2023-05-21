/*
 * @Author: Astray
 * @Date: 2023-05-19 14:49:13
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-19 14:49:44
 * @FilePath: \Code\14. 工程化\练习\01. CommonJS\demo\delay.js
 */
/**
 * 该函数返回一个Promise，它会等待指定的毫秒数，时间到达后该函数完成
 * @param {number} ms 毫秒数
 * @returns {Promise}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = delay;
