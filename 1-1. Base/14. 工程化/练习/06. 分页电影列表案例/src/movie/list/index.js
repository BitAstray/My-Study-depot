/*
 * @Author: Astray
 * @Date: 2023-05-22 21:49:12
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-24 16:12:38
 * @FilePath: \Code\14. 工程化\练习\06. 分页电影列表案例\src\movie\list\index.js
 */
import styles from "./index.module.less";
import $ from "jquery";

let container;

/**
 * 初始化函数，负责创建容器
 */
function init() {
  container = $("<div>").addClass(styles.container).appendTo("#app");
}

init();

/**
 * 根据传入的电影数组，创建元素，填充到容器中
 * @params movies 电影数组
 */
export function createMovieTags(movies) {
  const result = movies
    .map((m) => {
      return `<div>
    <a href="${m.url}" href="_blank"><img src="${m.cover}"></a>
    <a href="${m.url}" href="_blank"><p class="${styles.title}">${m.title}</p></a>
    <p class="${styles.rate}">${m.rate}</p>
    </div>`;
    })
    .join("");
  container.html(result);
}
