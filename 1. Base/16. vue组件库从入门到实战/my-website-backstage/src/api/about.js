/*
 * @Author: Astray
 * @Date: 2023-06-23 14:59:32
 */
import request from "@/utils/request";

export function getAbout() {
  return request({
    url: "/api/about",
    method: "GET",
  });
}

export function editAbout(data) {
  return request({
    url: "/api/about",
    method: "post",
    data,
  });
}
