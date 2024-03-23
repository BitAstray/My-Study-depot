/*
 * @Author: BitCreate
 * @Date: 2024-03-23 13:11:30
 */
"use strict";
exports.main = async (event, context) => {
  const { phone } = event;
  const currentNumber = Math.random().toString.substr(2, 6);

  //返回数据给客户端
  return event;
};
