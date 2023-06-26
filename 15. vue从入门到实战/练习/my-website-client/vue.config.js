/*
 * @Author: Astray
 * @Date: 2023-05-30 21:01:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-26 16:18:42
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\vue.config.js
 */
// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7001",
      },
      "/static": {
        target: "http://localhost:7001",
      },
    },
  },
  configureWebpack: require("./webpack.config.js"),
};
