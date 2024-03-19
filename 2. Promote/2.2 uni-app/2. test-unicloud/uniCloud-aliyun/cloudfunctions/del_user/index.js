"use strict";
const db = uniCloud.database();
exports.main = async (event, context) => {
  const collection = db.collection("user");
  console.log(event);
  const res = collection.doc(event._id).remove();
  return {
    code: 0,
    msg: "",
    data: res,
  };
};
