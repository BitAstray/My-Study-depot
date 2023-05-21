/*
 * @Author: Astray
 * @Date: 2023-05-20 16:28:40
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 16:31:22
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\综合练习\js\doms.js
 */
// 导出所有可能用到的dom元素
const formContainer = document.querySelector("#formContainer");
const userName = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");
const btnSubmit = document.querySelector("#btnSubmit");

export default {
  formContainer,
  userName,
  userPassword,
  btnSubmit,
};
