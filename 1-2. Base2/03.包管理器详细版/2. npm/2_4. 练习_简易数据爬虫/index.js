/*
 * @Author: Astray
 * @Date: 2023-09-17 16:46:54
 */
var getMovies = require("./getMovies");
var fs = require("fs");

getMovies().then((movies) => {
  var json = JSON.stringify(movies);
  fs.writeFile("./moves.json", json, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("文件保存成功");
    }
  });
});
