/*
 * @Author: BitCreate
 * @Date: 2024-03-30 21:44:21
 */
"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const version = await db.collection("version").get();

  //返回数据给客户端
  return {
    code: 0,
    data: {
      version: version.data[0].current_version,
      downLoadLinkUrl: "test",
    },
  };
};
