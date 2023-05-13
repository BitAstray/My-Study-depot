/*
 * @Author: Astray
 * @Date: 2023-03-29 16:25:49
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-09 21:52:49
 * @FilePath: \Code\07.JS项目实战\Util\animate.js
 */
/**
 * @description: 在totalMS时间内让from变到to
 * @param {object} options
 * @param {number} options.from 初始值
 * @param {number} options.to 结束值
 * @param {number} options.totalMS 变化总时间
 * @param {number} options.duration 多少时间变化一次
 * @param {number} options.onmove 每次变化需要执行的函数
 * @param {number} options.onend 变化完成后需要执行的函数
 * @return {*}
 */
function createAnimation(options) {
  var from = options.from;
  var to = options.to;
  var totalMS = options.totalMS || 1000;
  var duration = options.duration || 15;
  var timers = Math.floor(totalMS / duration); //变化的次数
  var dis = (to - from) / timers; //每次变化的量
  var curTimes = 0; //当前变化的次数

  var timerId = setInterval(function () {
    from += dis;
    curTimes++; //变化次数加一
    if (curTimes >= timers) {
      //变化次数达到了
      from = to; //变化完成
      clearInterval(timerId); //停止变化
      options.onend && options.onend();
    }
    options.onmove && options.onmove(from);
  }, duration);
}
