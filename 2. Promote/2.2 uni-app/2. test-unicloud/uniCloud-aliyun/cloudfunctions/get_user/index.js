/*
 * @Author: BitCreate
 * @Date: 2024-03-19 15:00:40
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const collection = db.collection("user");
  const res = await collection.get();

  //返回数据给客户端
  return {
    code: 0,
    msg: "",
    data: res,
  };
};
