/*
 * @Author: BitCreate
 * @Date: 2024-03-26 21:07:14
 */
"use strict";
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
  const { userId, articleId, content } = event;
  // 获取用户信息
  let user = await db.collection("user").doc(userId).get();
  user = user.data[0];
  // 获取文章信息
  let article = await db.collection("article").doc(articleId).get();
  article = article.data[0];
  let commentObj = {
    comment_id: generateID(5),
    comment_content: content,
    create_time: new Date(),
    is_reply: false,
    replyArr: [],
    author: {
      author_id: user._id,
      author_name: user.author_name,
      author_avatar: user.avatar,
      professional: user.professional,
    },
  };

  commentObj = dbCmd.unshift(commentObj);
  await db.collection("article").doc(articleId).update({
    comment: commentObj,
  });

  // 生成id的方法
  function generateID(length) {
    return Number(Math.random().toString().substring(3, length) + Date.now()).toString(
      36
    );
  }
  //返回数据给客户端
  return {
    code: 0,
    data: {
      msg: "评论成功",
    },
  };
};
