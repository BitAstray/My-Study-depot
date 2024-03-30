/*
 * @Author: BitCreate
 * @Date: 2024-03-29 13:44:29
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { article_id } = event;

  await db
    .collection("article")
    .where({ _id: article_id })
    .update({
      browse_count: db.command.inc(1),
    });
  const res = await db
    .collection("article")
    .aggregate()
    .match({ _id: article_id })
    .project({
      comment: 0,
    })
    .end();
  //返回数据给客户端
  return {
    code: 0,
    msg: "success",
    data: res.data[0],
  };
};
