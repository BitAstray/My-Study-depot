/*
 * @Author: Astray
 * @Date: 2023-03-24 12:02:56
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-24 13:34:16
 * @FilePath: \JS收官\04.WebAPI\24.DOM尺寸和位置\练习题\p1\js\index.js
 */
// 让便签可被拖动，但不能超出视口

var moveBar = document.querySelector(".move-bar");
var note = document.querySelector(".note");

moveBar.onmousedown = function (e) {
  var x = e.clientX,
    y = e.clientY;

  // 元素的坐标
  var rect = moveBar.getBoundingClientRect();

  // 获取视口、元素宽高
  var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;

  var ew = note.offsetWidth,
    eh = note.offsetHeight;

  // 最大的left和Top
  var maxLeft = w - ew,
    maxTop = h - eh;

  // 鼠标按下后监听整个屏幕鼠标移动
  window.onmousemove = function (e) {
    var disX = e.clientX - x,
      disY = e.clientY - y;

    var left = rect.left + disX,
      top = rect.top + disY;
    // 对left和rigth的有效范围进行限制
    if (left < 0) {
      left = 0;
    } else if (left > maxLeft) {
      left = maxLeft;
    }

    if (top < 0) {
      top = 0;
    } else if (top > maxTop) {
      top = maxTop;
    }

    note.style.left = left + "px";
    note.style.top = top + "px";
  };

  // 鼠标抬起后，不在监听移动和抬起
  window.onmouseup = function () {
    console.log("不在监听移动");
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
