/*
 * @Author: Astray
 * @Date: 2023-06-16 15:41:29
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/admin/login",
    method: "post",
    data,
  });
}

export function getInfo() {
  return request({
    url: "/api/admin/whoami",
    method: "get",
  });
}

export function setUser(data) {
  return request({
    url: "/api/admin",
    method: "put",
    data,
  });
}
