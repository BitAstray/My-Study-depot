/*
 * @Author: Astray
 * @Date: 2023-05-19 14:54:32
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-19 15:24:59
 * @FilePath: \Code\14. 工程化\练习\01. CommonJS\demo\main.js
 */
/**
 * 运行该函数，会逐字打印config.js中的文本
 * 每个字之间的间隔在config.js已有配置
 */
const print = require("./print.js");
const delay = require("./delay.js");
const config = require("./config.js");

async function run() {
  for (let index = 0; index < config.text.length; index++) {
    print(index);
    await delay(config.wordDuration);
  }
}

run();
