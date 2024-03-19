/*
 * @Author: BitCreate
 * @Date: 2024-03-19 14:30:01
 */
"use strict";
// 获取到数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
  // 获取某一个数据表的集合
  const collection = db.collection("user");
  // 获取前端传递的数据
  const { userName, age } = event;
  // 添加数据操作
  const res = await collection.add({ userName, age });

  //返回数据给客户端
  return {
    code: 0,
    msg: res,
  };
};
