/*
 * @Author: Astray
 * @Date: 2023-05-22 21:49:12
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-24 16:53:48
 * @FilePath: \Code\14. 工程化\练习\06. 分页电影列表案例\src\movie\pager\index.js
 */
import styles from "./index.module.less";
import $ from "jquery";
import getMovies from "@/api/movie";
import { createMovieTags } from "../list";

let container;
/**
 * 初始化函数，负责创建容器
 */
function init() {
  container = $("<div>").addClass(styles.pager).appendTo("#app");
}

init();

/**
 * 根据传入的页码、页容量、总记录数，创建分页区域的标签
 * @params page 页码
 * @params limit 页容量
 * @params total 总页数
 */
export function createPagers(page, limit, total) {
  container.empty();
  /**
   * 辅助函数，负责帮忙创建一个页码标签
   * @params text 标签的文本
   * @params status 标签的状态，空字符串-普通状态，disabled-禁用状态，active-选中状态
   */
  function createTag(text, status, targetPage) {
    const className = styles[status];
    const span = $("<span>").text(text).addClass(className).appendTo(container);
    if (!status) {
      span.on("click", async function () {
        // 1.重新拿数据
        const resp = await getMovies(targetPage, limit);
        // 2.重新生成列表
        createMovieTags(resp.data.movieList);
        // 3.重新生成页码
        createPagers(targetPage, limit, resp.data.movieTotal);
      });
    }
  }

  const pageNumber = Math.ceil(total / limit);
  //1. 创建首页标签
  createTag("|<<", page === 1 ? "disabled" : "", 1);
  //2. 创建上一页标签
  createTag("<<", page === 1 ? "disabled" : "", page - 1);
  //3. 创建数字页码标签
  const maxCount = 10; //最大显示的页码数量
  let min = Math.floor(page - maxCount / 2);
  min < 1 && (min = 1);
  let max = min + 10 - 1;
  max > pageNumber && (max = pageNumber);
  for (let i = min; i <= max; i++) {
    createTag(i, page === i ? "active" : "", page - 1);
  }
  //4. 创建下一页标签
  createTag(">>", page === pageNumber ? "disabled" : "", page + 1);
  //5. 创建尾页标签
  createTag(">>|", page === pageNumber ? "disabled" : "", pageNumber);
}
