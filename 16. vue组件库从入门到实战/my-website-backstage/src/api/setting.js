/*
 * @Author: Astray
 * @Date: 2023-06-23 15:13:16
 */
import request from "@/utils/request";

export function getSetting() {
  return request({
    url: "/api/setting",
    method: "GET",
  });
}

export function editSetting(data) {
  return request({
    url: "/api/setting",
    method: "put",
    data,
  });
}
