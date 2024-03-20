/*
 * @Author: BitCreate
 * @Date: 2024-03-19 20:36:32
 */
const requireApi = require.context(".", true, /\.js$/);

let module = {};

requireApi.keys().forEach((key, index) => {
  if (key === "./index.js") return;
  Object.assign(module, requireApi(key));
});

export default module;
