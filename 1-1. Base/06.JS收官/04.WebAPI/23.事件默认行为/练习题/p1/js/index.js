/*
 * @Author: BitCreate
 * @Date: 2023-03-21 17:21:43
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-21 18:26:25
 * @FilePath: \JS收官\04.WebAPI\23.事件默认行为\练习题\p1\js\index.js
 */
// 完成表单验证

/**
 * @description: 验证账号数据
 * @return {boolean}
 */
function validateLoginId() {
  var div = document.querySelector("#loginId");
  var inp = div.querySelector("input");
  var msg = div.querySelector(".msg");

  var err = "";
  var loginId = inp.value.trim();

  if (!loginId) {
    err = "账号不能为空";
  } else if (loginId.length < 3 || loginId.length > 12) {
    err = "账号长度是3-12位的";
  }

  msg.innerText = err;

  div.className = !err ? "form-item" : "form-item err";

  return !err;
}

/**
 * @description: 验证密码数据
 * @return {boolean}
 */
function validateLoginPwd() {
  var div = document.querySelector("#loginPwd");
  var inp = div.querySelector("input");
  var msg = div.querySelector(".msg");

  var err = "";
  var loginPwd = inp.value.trim();

  if (!loginPwd) {
    err = "密码不能为空";
  } else if (loginPwd.length < 6 || loginPwd.length > 16) {
    err = "密码长度是6-16位的";
  }

  msg.innerText = err;

  div.className = !err ? "form-item" : "form-item err";

  return !err;
}

/**
 * @description: 验证整个表单，设置元素内容和状态
 * @return {boolean} 通过返回true, 否则返回false
 */
function validateForm() {
  var r1 = validateLoginId();
  var r2 = validateLoginPwd();
  return r1 && r2;
}

var loginId = document.querySelector("#loginId input");
var loginPwd = document.querySelector("#loginPwd input");
var form = document.querySelector(".form-container");

loginId.addEventListener("input", validateLoginId);
loginPwd.addEventListener("input", validateLoginPwd);

form.addEventListener("submit", function (e) {
  if (!validateForm()) {
    e.preventDefault();
  }
});
