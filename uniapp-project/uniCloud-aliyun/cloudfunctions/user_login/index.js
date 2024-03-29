/*
 * @Author: BitCreate
 * @Date: 2024-03-29 13:44:29
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { username, password, phone, type } = event;
  const res = await db
    .collection("user")
    .aggregate()
    .match(type === "account" ? { loginName: username, password } : { phone })
    .end();
  //返回数据给客户端

  return res.affectedDocs
    ? { code: 0, msg: "success", data: res.data }
    : { code: -1, msg: type === "account" ? "用户名或密码错误" : "手机号不存在" };
};
