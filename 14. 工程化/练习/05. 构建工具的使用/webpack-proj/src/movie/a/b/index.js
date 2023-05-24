/*
 * @Author: Astray
 * @Date: 2023-05-22 21:10:54
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-22 21:11:24
 * @FilePath: \Code\14. 工程化\练习\05. 构建工具的使用\webpack-proj\src\movie\a\b\index.js
 */
import $ from "jquery";
import url from "@/th.jpg";

export default function () {
  $("<img>").prop("src", url).appendTo(document.body);
}
