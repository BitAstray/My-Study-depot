/*
 * @Author: Astray
 * @Date: 2023-06-16 21:58:01
 */

import request from "@/utils/request";
// 获取验证码

export function getCaptcha() {
  return request({
    url: "/res/captcha",
    method: "get",
  });
}
