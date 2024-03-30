"use strict";
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
  const { userId, articleId } = event;

  // 获取用户信息
  const user = await db.collection("user").doc(userId).get();
  const thumbs_up_article_ids = user.data[0].thumbs_up_article_ids;

  let msg = "";
  let article_ids = null;
  let thumbsNumber = null;
  if (thumbs_up_article_ids.includes(articleId)) {
    msg = "取消点赞成功";
    article_ids = dbCmd.pull(articleId);
    thumbsNumber = -1;
  } else {
    msg = "点赞成功";
    article_ids = dbCmd.addToSet(articleId);
    thumbsNumber = 1;
  }

  await db.collection("user").doc(userId).update({
    thumbs_up_article_ids: article_ids,
  });

  // 更新文章点赞数
  const article = await db
    .collection("article")
    .doc(articleId)
    .update({
      thumbs_up_count: dbCmd.inc(thumbsNumber),
    });
  //返回数据给客户端
  return {
    code: 0,
    data: {
      msg,
    },
  };
};
