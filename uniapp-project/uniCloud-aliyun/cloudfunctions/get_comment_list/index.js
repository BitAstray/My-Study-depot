/*
 * @Author: BitCreate
 * @Date: 2024-03-26 22:07:59
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { articleId, pageSize = 10, page = 1 } = event;

  const list = await db
    .collection("article")
    .aggregate()
    .match({
      _id: articleId,
    })
    .unwind("$comment") // 从指定的节点进行内容的获取
    .project({
      _id: 0,
      comment: 1,
    })
    .replaceRoot({
      newRoot: "$comment",
    })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .end();

  //返回数据给客户端
  return {
    code: 0,
    data: list.data,
  };
};
