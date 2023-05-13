/*
 * @Author: Astray
 * @Date: 2023-03-25 13:32:50
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-25 14:20:20
 * @FilePath: \Code\JS收官\05.技巧\28.函数防抖\练习题\js\practice.js
 */
// 当窗口尺寸变化后，调用layout函数
var resizeLayout = debounce(layout, 1000);
window.addEventListener("resize", resizeLayout);

/**
 * @description: 函数防抖
 * @param {Function} fn
 * @param {Number} duration
 * @return {Function}
 */
function debounce(fn, duration) {
  var timeId;
  return function () {
    // 将该函数的this传递到fn
    var curThis = this;
    // 将该函数参数全部传递给fn
    var args = Array.prototype.slice.call(arguments, 0);
    clearTimeout(timeId);
    timeId = setTimeout(function () {
      fn.apply(curThis, args);
    }, duration);
  };
}
