/*
 * @Author: Astray
 * @Date: 2023-05-20 16:14:58
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 16:48:15
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\综合练习\js\index.js
 */
import doms from "./doms.js";
import login from "./login.js";

doms.formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});
