// 让小球向右下运动，遇到边缘后反弹

// 每隔一段时间（20ms），改变小球的left, 和right
var ball = document.querySelector(".ball");
var disX = 3,
  disY = 3;
// 屏幕和元素宽高
var w = document.documentElement.clientWidth,
  h = document.documentElement.clientHeight;
var ew = ball.clientWidth,
  eh = ball.clientHeight;
// 最大横纵坐标
var maxLeft = w - ew,
  maxTop = h - eh;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 随机改变背景颜色
function changeBg() {
  var r = getRandom(0, 200);
  var b = getRandom(0, 200);
  var g = getRandom(0, 200);
  ball.style.backgroundColor = "rgba(" + r + "," + b + "," + g + ")";
}

setInterval(function () {
  var rect = ball.getBoundingClientRect();
  var x = rect.left,
    y = rect.top;
  var left = x + disX;
  var top = y + disY;
  if (x > maxLeft) {
    left = maxLeft;
    disX = -disX;
    changeBg();
  } else if (x < 0) {
    left = 0;
    disX = -disX;
    changeBg();
  }
  if (y > maxTop) {
    top = maxTop;
    disY = -disY;
    changeBg();
  } else if (y < 0) {
    top = 0;
    disY = -disY;
    changeBg();
  }

  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 20);
