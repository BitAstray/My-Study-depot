/*
 * @Author: Astray
 * @Date: 2023-03-25 14:25:22
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-25 23:25:49
 * @FilePath: \Code\JS收官\03.标准库\29.正则表达式\练习题\p2\index.js
 */
var content = document.querySelector(".content");

var text = content.innerHTML;
var reg = /\s+.+/g;

var newHtml = text.replace(reg, function (s) {
  s = s.replace(/\s/g, "");
  return "<p>" + s + "</p>";
});

console.log(newHtml);
content.innerHTML = newHtml;
