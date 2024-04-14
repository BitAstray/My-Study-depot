/*
 * @Author: Astray
 * @Date: 2023-06-12 14:14:58
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-12 15:15:02
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\directives\lazy.js
 */

import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];
// 调用函数，设置合适的图片

function setImage(img) {
  // 处理图片
  // 该图片是否在视口范围内
  img.dom.src = defaultGif; //先用默认图片
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  const clientHeight = document.documentElement.clientHeight;
  if (rect.top >= -height && rect.top <= clientHeight) {
    const tempImg = new Image();
    tempImg.onload = function () {
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}

function setImages() {
  for (const img of imgs) {
    // 处理该图片
    setImage(img);
  }
}

function handleScroll(dom) {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bingdings) {
    const img = {
      dom: el,
      src: bingdings.value,
    };
    imgs.push(img);
    // 立即处理
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
