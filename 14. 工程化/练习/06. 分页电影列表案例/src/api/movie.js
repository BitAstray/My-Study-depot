/*
 * @Author: Astray
 * @Date: 2023-05-24 15:14:56
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-24 15:41:23
 * @FilePath: \Code\14. 工程化\练习\06. 分页电影列表案例\src\api\movie.js
 */
import axios from "axios";

export default async function getMovies(page, size) {
  const resp = await axios.get("/api/movies", {
    params: {
      page,
      size,
    },
  });
  return resp.data;
}
