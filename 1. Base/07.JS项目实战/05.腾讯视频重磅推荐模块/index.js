/*
 * @Author: Astray
 * @Date: 2023-04-10 16:52:11
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-11 17:05:09
 * @FilePath: \Code\03.JS项目实战\05.腾讯视频重磅推荐模块\index.js
 */
var imgs = document.querySelector(".imgs");
var ul = document.querySelector("ul");

var imgDom = [];
var navDom = [];
var curIndex = 0;

// 初始化
function init() {
  // 创建所有项目
  for (var i = 0; i < data.length; i++) {
    createItem(data[i], i);
  }

  // 默认显示第一个
  change(0);
  start();
}

init();

function createItem(data, index) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  var img = document.createElement("a");

  // 创建标题
  a.title = data.desc;
  a.innerHTML = "<span>" + data.title + "</span> " + data.desc;
  li.className = "nav";
  li.appendChild(a);
  ul.appendChild(li);
  navDom.push(li);

  // 创建图片
  img.style.backgroundColor = data.bg;
  img.style.backgroundImage = "url(" + data.img + ")";
  imgs.appendChild(img);
  imgDom.push(img);

  li.onmouseenter = function (e) {
    stop();
    change(index);
    curIndex = index;
  };

  li.onmouseleave = start;
}

/**
 * @description:将指定下标文件数据显示到页面上
 * @param {Number} index 将要设置的数据索引
 */
function change(index) {
  // 移除之前的选中效果
  var selectedImg = imgs.querySelector(".active");
  var selectedNav = ul.querySelector(".active");
  if (selectedImg && selectedNav) {
    selectedImg.className = "";
    selectedNav.className = "nav";
  }
  imgDom[index].className = "active";
  navDom[index].className = "active";
}

function toNext() {
  curIndex++;
  if (curIndex > data.length - 1) {
    curIndex = 0;
  }
  change(curIndex);
}

// 自动播放
var timerId;
function start() {
  if (timerId) {
    return;
  }
  timerId = setInterval(toNext, 5000);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}
