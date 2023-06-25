/*
 * @Author: Astray
 * @Date: 2023-06-15 14:37:28
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 14:38:59
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\mock\about.js
 */
import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "http://resume.yuchuang.info",
});
