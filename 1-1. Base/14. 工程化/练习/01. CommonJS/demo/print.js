/*
 * @Author: Astray
 * @Date: 2023-05-19 14:49:52
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-19 15:11:30
 * @FilePath: \Code\14. 工程化\练习\01. CommonJS\demo\print.js
 */
/**
 * 该函数会做以下两件事：
 * 1. console.clear() 清空控制台
 * 2. 读取config.js中的text配置，打印开始位置到index位置的字符
 * @param {number} index
 */

const config = require("./config");
function print(index) {
  console.clear();
  const str = config.text.substring(0, index + 1);
  console.log(str);
}

module.exports = print;
