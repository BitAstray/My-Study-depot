/*
 * @Author: Astray
 * @Date: 2023-04-10 19:00:12
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-14 14:05:25
 * @FilePath: \Code\03.JS项目实战\07.积分抽奖效果\index.js
 */
/*
 *1. 获取抽奖次数
 *2. 点击开始抽奖
 *3. 触发弹窗显示
 *4. 给弹窗进行点击事件绑定
 */

(function () {
  var number = 2; //默认抽奖次数为5
  var numberDom = document.querySelector(".number");
  var prizeList = document.querySelector(".prize-list");
  var lotteryBtn = document.querySelector(".lottery-btn");
  var maskerBtn = document.querySelector(".masker-btn");
  var maskerDialog = document.querySelector(".masker-dialog");
  var maskerContent = document.querySelector(".masker-content");
  var close = document.querySelector(".close");
  var curIndex = 0;
  var timerId = null;

  function init() {
    numberDom.innerHTML = number;
    initEvent();
  }
  init();

  function initEvent() {
    // 点击开始抽奖
    lotteryBtn.addEventListener("click", startLottery);
    // 点击关闭弹窗
    close.addEventListener("click", function () {
      maskerDialog.style.display = "none";
    });
    // 点击再次抽奖
    maskerBtn.addEventListener("click", function () {
      maskerDialog.style.display = "none";
      if (number === 0 || timerId) return;
      startLottery();
    });
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * @description: 开始抽奖
   */
  function startLottery() {
    // 正在进行抽奖，等待
    if (timerId) return;
    if (number === 0) {
      openDialog("抽奖次数不足");
      return;
    }
    number--;
    numberDom.innerHTML = number;
    lotteryBtn.setAttribute("status", "starting");
    var num = 3000 + getRandom(0, 6000);
    timerId = setInterval(function () {
      var active = prizeList.querySelector(".active");
      num -= 200;
      if (num <= 200) {
        clearInterval(timerId);
        timerId = null;
        openDialog(active.querySelector("span").innerText);
        return;
      }
      if (active) {
        active.className = "";
      }
      prizeList.children[curIndex].className = "active";
      curIndex = ++curIndex % 8;
    }, 100);
  }

  // 打开弹窗
  function openDialog(content) {
    if (content === "谢谢参与") {
      maskerContent.innerHTML = "加油！";
    } else if (content === "抽奖次数不足") {
      maskerBtn.innerHTML = "确定";
      maskerContent.innerHTML = content;
    } else {
      maskerContent.innerHTML = "恭喜您获得" + content;
    }

    maskerDialog.style.display = "block";
  }
})();
