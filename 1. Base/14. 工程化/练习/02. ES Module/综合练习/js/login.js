/*
 * @Author: Astray
 * @Date: 2023-05-20 16:32:28
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 16:50:53
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\综合练习\js\login.js
 */
// 导出一个函数，调用该函数，该函数会自动获取文本框的值完成登陆
import { login } from "./api/user.js";
import doms from "./doms.js";

let isLoginning = false; //是否登录中

export default async function () {
  if (isLoginning) {
    return; //
  }
  isLoginning = true; //登录中
  doms.btnSubmit.value = "登录中...";
  const loginId = doms.userName.value;
  const loginPwd = doms.userPassword.value;

  if (!loginId) {
    alert("请填写账号");
    isLoginning = false;
    doms.btnSubmit.value = "登录";
    return;
  }

  if (!loginPwd) {
    alert("请填写密码");
    isLoginning = false;
    doms.btnSubmit.value = "登录";
    return;
  }

  const resp = await login(loginId, loginPwd);

  if (resp) {
    alert("登录成功，欢迎你，" + resp.nickname);
  } else {
    alert("登录失败");
  }

  isLoginning = false; //登录完成
  doms.btnSubmit.value = "登录";
}
