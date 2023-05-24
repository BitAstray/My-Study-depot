/*
 * @Author: Astray
 * @Date: 2023-05-22 21:49:12
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-24 16:21:31
 * @FilePath: \Code\14. 工程化\练习\06. 分页电影列表案例\src\movie\index.js
 */
import getMovies from "../api/movie";
import { createMovieTags } from "./list";
import { createPagers } from "./pager";

async function init() {
  const resp = await getMovies(1, 30);
  createMovieTags(resp.data.movieList); //创建列表
  createPagers(1, 30, resp.data.movieTotal); //创建分页
}

init();
