/*
 * @Author: Astray
 * @Date: 2023-05-30 21:01:19
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 20:48:30
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\vue.config.js
 */
// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "localhost",
      },
    },
  },
  configureWebpack: require("./webpack.config.js"),
};
