/*
 * @Author: BitCreate
 * @Date: 2024-03-26 18:46:09
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const { userId, label_ids } = event;

  await db.collection("user").doc(userId).update({
    label_ids,
  });
  //返回数据给客户端
  return {
    code: 0,
    data: {
      msg: "修改成功",
    },
  };
};
