/*
 * @Author: Astray
 * @Date: 2023-05-21 12:42:52
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-21 14:00:48
 * @FilePath: \Code\14. 工程化\练习\03. 包管理器\demo\index.js
 */
// const _ = require("lodash");

// console.log(_.chunk([2, 3, 4, 5], 2));

const Mock = require("mockjs");

const result = Mock.mock({
  name: "@cname",
});
console.log(result);
