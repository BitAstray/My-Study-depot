/*
 * @Author: Astray
 * @Date: 2023-09-16 16:37:43
 */
var express = require("express");

var app = new express();

app.use(express.static("./public"));

app.listen(12306, function () {
  console.log("server is running at 12306");
});
