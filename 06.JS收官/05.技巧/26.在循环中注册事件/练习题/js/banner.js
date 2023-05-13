/*
 * @Author: Astray
 * @Date: 2023-03-24 16:01:08
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-24 23:20:59
 * @FilePath: \Code\JS收官\05.技巧\26.在循环中注册事件\练习题\js\banner.js
 */
(function () {
  // 完成横幅区的图片切换
  // 横幅区数据
  var datas = [
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920",
      link: "https://www.mi.com/mi11le-5g-ne",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/xiaomipad5",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6",
    },
  ];

  /* 
    1. 设置超连接的地址和图片路径  
    2. 动态生成span元素
    3. 控制span元素的类样式
  */

  function $(selector) {
    return document.querySelector(selector);
  }

  // 需要的dom
  var bannerDots = $(".banner-dots");
  var bannerCover = $(".banner-cover");
  var bannerCoverImg = $(".banner-cover img");
  var pointerLeft = $(".banner-pointer-left");
  var pointerRight = $(".banner-pointer-right");
  var banner = $(".banner");

  /**
   * @description: 初始化
   */
  function init() {
    for (var i = 0; i < datas.length; i++) {
      var span = document.createElement("span");
      bannerDots.appendChild(span);
    }

    change(0);
    start();
  }

  init();

  /**
   * @description:将指定下标文件数据显示到页面上
   * @param {Number} index 将要设置的数据索引
   */
  function change(index) {
    var d = datas[index];
    bannerCover.href = d.link;
    bannerCoverImg.src = d.img;

    // 移除之前的选中效果
    var selected = bannerDots.querySelector(".banner-dots-selected");
    if (selected) {
      selected.className = "";
    }
    bannerDots.children[index].className = "banner-dots-selected";
  }

  var curIndex = 0; //目前显示的是第几张

  /**
   * @description: 向前翻
   */
  function toPrev() {
    curIndex--;
    if (curIndex < 0) {
      curIndex = datas.length - 1;
    }
    change(curIndex);
  }

  /**
   * @description: 向后翻
   */
  function toNext() {
    curIndex++;
    if (curIndex > datas.length - 1) {
      curIndex = 0;
    }
    change(curIndex);
  }

  // 注册事件
  pointerLeft.onclick = toPrev;
  pointerRight.onclick = toNext;

  for (var i = 0; i < bannerDots.children.length; i++) {
    var span = bannerDots.children[i];
    (function (i) {
      span.onclick = function () {
        change(i);
        curIndex = i;
      };
    })(i);
  }

  banner.onmouseenter = stop;
  banner.onmouseleave = start;

  // 自动播放
  var timerId;
  function start() {
    if (timerId) {
      return;
    }
    timerId = setInterval(toNext, 2000);
  }

  function stop() {
    clearInterval(timerId);
    timerId = null;
  }
})();
