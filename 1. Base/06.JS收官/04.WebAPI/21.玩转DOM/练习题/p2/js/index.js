/*
 * @Author: BitCreate
 * @Date: 2023-03-15 21:13:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-16 14:54:20
 * @FilePath: \JS收官\04.WebAPI\21.玩转DOM\练习题\p2\js\index.js
 */
// 每隔一段时间，切换英雄的图片，让英雄动起来

var img = document.querySelector("img");
var curIndex = 1;

setInterval(function () {
  // if (curIndex === 5) curIndex = 1;
  curIndex = (curIndex % 4) + 1;
  img.src = "./img/" + curIndex + ".png";
  c;
}, 200);

// 每隔一段时间，改变英雄的位置，让英雄向右移动

var left = 0;
setInterval(function () {
  left = left + 2;
  img.style.left = left + "px";
}, 200);
