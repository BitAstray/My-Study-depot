/*
 * @Author: Astray
 * @Date: 2023-05-30 21:11:18
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-30 21:42:09
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\api\banner.js
 */
import request from "./request";

export async function getBanners() {
  return await request.get("/api/banners");
}
