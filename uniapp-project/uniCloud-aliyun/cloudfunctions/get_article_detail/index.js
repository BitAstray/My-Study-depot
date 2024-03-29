"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { article_id } = event;
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
