/*
 * @Author: Astray
 * @Date: 2023-05-20 16:16:57
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-20 16:27:59
 * @FilePath: \Code\14. 工程化\练习\02. ES Module\综合练习\js\api\user.js
 */
// 负责和用户先关的远程请求
// 具名导出一个登陆方法
export function login(loginId, loginPwd) {
  return fetch(`https://study.duyiedu.com/api/user/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ loginId, loginPwd }),
  })
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}
