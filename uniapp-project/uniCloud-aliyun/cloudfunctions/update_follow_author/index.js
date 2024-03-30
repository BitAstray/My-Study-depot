/*
 * @Author: BitCreate
 * @Date: 2024-03-30 14:06:02
 */
"use strict";

const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
  const { userId, authorId } = event;

  const user = await db.collection("user").doc(userId).get();
  const authorLikesIds = user.data[0].author_likes_ids;
  let msg = "";
  let author_ids = null;
  if (authorLikesIds.includes(authorId)) {
    msg = "取消关注成功";
    author_ids = dbCmd.pull(authorId);
  } else {
    msg = "关注成功";
    author_ids = dbCmd.addToSet(authorId);
  }

  await db.collection("user").doc(userId).update({
    author_likes_ids: author_ids,
  });
  //返回数据给客户端
  return {
    code: 0,
    data: {
      msg,
      author_ids,
    },
  };
};
