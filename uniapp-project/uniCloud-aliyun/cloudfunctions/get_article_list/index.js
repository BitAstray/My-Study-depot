/*
 * @Author: BitCreate
 * @Date: 2024-03-20 15:40:41
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { classify, page = 1, pageSize = 10 } = event;
  let obj = {};
  if (classify !== "全部") {
    obj = { classify };
  }
  const list = await db
    .collection("article")
    .aggregate()
    .match(obj)
    .project({
      content: 0,
    })
    .skip((page - 1) * pageSize) //第一页数据从零开始
    .limit(pageSize) //每页返回多少条数据
    .end();

  // 返回当前匹配的数据总数
  const { total } = await db.collection("article").where(obj).count();

  //返回数据给客户端
  return {
    code: 0,
    msg: "数据获取成功",
    data: {
      articleList: list.data,
      total,
    },
  };
};
