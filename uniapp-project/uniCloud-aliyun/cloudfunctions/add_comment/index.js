/*
 * @Author: BitCreate
 * @Date: 2024-03-26 21:07:14
 */
"use strict";
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
  const {
    userId,
    articleId,
    content,
    comment_id = "",
    reply_id = "",
    is_reply = false,
  } = event;
  // 获取用户信息
  let user = await db.collection("user").doc(userId).get();
  user = user.data[0];
  // 获取文章信息
  const article = await db.collection("article").doc(articleId).get();
  const comments = article.data[0].comment;
  let commentObj = {
    comment_id: generateID(5),
    comment_content: content,
    create_time: new Date(),
    is_reply,
    replyArr: [],
    author: {
      author_id: user._id,
      author_name: user.author_name,
      author_avatar: user.avatar,
      professional: user.professional,
    },
  };

  if (comment_id === "") {
    commentObj.replyArr = [];
    commentObj = dbCmd.unshift(commentObj);
  } else {
    // 获取当前评论的集合，在这个集合里面找到指定的评论，修改指定的replayArr
    let commentAuthor = null;
    let commentIndex = comments.findIndex((item) => item.comment_id === comment_id);
    if (is_reply) {
      commentAuthor = comments[commentIndex].replyArr.find(
        (item) => item.comment_id === reply_id
      ).author.author_name;
    } else {
      commentAuthor = comments[commentIndex].author.author_name;
    }
    commentObj.to = commentAuthor;
    commentObj = {
      [commentIndex]: {
        replyArr: dbCmd.unshift(commentObj),
      },
    };
  }

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
