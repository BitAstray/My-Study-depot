/*
 * @Author: Astray
 * @Date: 2023-04-11 17:09:00
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-12 19:07:18
 * @FilePath: \Code\03.JS项目实战\06.图片放大镜\index.js
 */
// 获取DOM
var leftImg = document.querySelector(".left-img");
var rightImg = document.querySelector(".right-img");
var imgList = document.querySelector(".img-list");
var mask = document.querySelector(".mask");

// 初始化图片数据
var imgs = {
  small: ["imgA_1.jpg", "imgB_1.jpg", "imgC_1.jpg"],
  middle: ["imgA_2.jpg", "imgB_2.jpg", "imgC_2.jpg "],
  large: ["imgA_3.jpg", "imgB_3.jpg", "imgC_3.jpg"],
};

//* 1.  初始化页面

function init() {
  for (var i = 0; i < imgs.small.length; i++) {
    var li = document.createElement("li");
    li.style.backgroundImage = "url(" + "./images/" + imgs.small[i];
    imgList.appendChild(li);
    (function (i) {
      li.onmouseenter = function () {
        change(i);
      };
    })(i);
  }

  //* 2.鼠标移动事件
  // 移入
  leftImg.onmousemove = function (e) {
    mask.style.opacity = 1;
    rightImg.style.opacity = 1;

    var left = e.clientX - leftImg.offsetLeft - mask.offsetWidth / 2;
    var top = e.clientY - leftImg.offsetTop - mask.offsetHeight / 2;
    var maxLeft = leftImg.offsetWidth - mask.offsetWidth;
    var maxTop = rightImg.offsetHeight - mask.offsetHeight;

    // 边界控制
    left = left < 0 ? 0 : left;
    left = left >= maxLeft ? maxLeft : left;
    top = top < 0 ? 0 : top;
    top = top >= maxTop ? maxTop : top;

    // 遮罩层位置
    mask.style.left = left + "px";
    mask.style.top = top + "px";

    // 大图位置
    rightImg.style.backgroundPositionX = -left + "px";
    rightImg.style.backgroundPositionY = -top + "px";
  };

  // 移出
  leftImg.onmouseleave = function () {
    mask.style.opacity = 0;
    rightImg.style.opacity = 0;
  };

  change(0);
}

init();

// 改变所选元素改变内容
function change(index) {
  var activeLi = imgList.querySelector(".active");
  if (activeLi) {
    activeLi.className = "";
  }
  leftImg.style.backgroundImage = "url(" + "./images/" + imgs.middle[index];
  rightImg.style.backgroundImage = "url(" + "./images/" + imgs.large[index];
  imgList.children[index].className = "active";
}
