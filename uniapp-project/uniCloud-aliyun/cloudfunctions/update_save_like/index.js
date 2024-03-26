"use strict";
const db = uniCloud.database();
// 修改指令
const dbCmd = db.command;
exports.main = async (event, context) => {
  const { articleId, userId } = event;
  console.log(articleId, userId);
  // 获取用户数据表的集合
  const userInfo = await db.collection("user").doc(userId).get();
  const articleIds = userInfo.data[0].article_likes_ids;
  let msg = "";
  // 判断是否已经收藏
  if (articleIds.includes(articleId)) {
    // 取消收藏
    articleIds.splice(articleIds.indexOf(articleId), 1);
    msg = "取消收藏成功";
  } else {
    // 收藏
    articleIds.push(articleId);
    msg = "收藏成功";
  }
  // 修该当前用户的收藏文章列表
  await db.collection("user").doc(userId).update({
    article_likes_ids: articleIds,
  });

  // 重新获取用户信息
  const newUserInfo = await db.collection("user").doc(userId).get();
  //返回数据给客户端
  return {
    code: 0,
    msg,
    data: {
      code: 0,
      msg,
      data: newUserInfo.data[0],
    },
  };
};
