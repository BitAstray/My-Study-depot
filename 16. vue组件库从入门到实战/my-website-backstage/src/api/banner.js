/*
 * @Author: Astray
 * @Date: 2023-06-16 15:41:29
 */
import request from "@/utils/request";

// 获取首页标语
export function getBanner() {
  return request({
    url: "/api/banner",
    method: "get",
  });
}

// 设置首页标语
export function setBanner(data) {
  return request({
    url: "/api/banner",
    method: "post",
    data,
  });
}
