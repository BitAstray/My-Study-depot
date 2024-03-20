/*
 * @Author: BitCreate
 * @Date: 2024-03-19 20:12:00
 */
"use strict";
// 获取数据库引用
const db = uniCloud.database();
exports.main = async (event, context) => {
  const collection = db.collection("label");
  const res = await collection.get();
  //返回数据给客户端
  return {
    code: 0,
    msg: "",
    data: res.data,
  };
};
