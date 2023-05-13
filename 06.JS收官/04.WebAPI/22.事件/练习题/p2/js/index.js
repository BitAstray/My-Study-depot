/*
 * @Author: BitCreate
 * @Date: 2023-03-16 17:08:06
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-21 16:44:02
 * @FilePath: \JS收官\04.WebAPI\22.事件\练习题\p2\js\index.js
 */
// 每隔1秒自动切换图片
// 开始（继续）
var timerId;
var i = 1;
function start() {
  if (timerId) {
    // 当前已经有计时器了
    return;
  }
  timerId = setInterval(function () {
    i = (i % 4) + 1;
    document.querySelector("img").src = "./img/" + i + ".jpeg";
  }, 1000);
}

// 停止
function stop() {
  clearInterval(timerId);
  timerId = null;
}

start();

// 当鼠标移动到元素上时停止切换，移出后开始切换
document.querySelector("img").addEventListener("mouseenter", stop);
document.querySelector("img").addEventListener("mouseleave", start);
