/*
 * @Author: BitCreate
 * @Date: 2024-03-19 20:44:17
 */
import http from "../../utils/http";

//用户登录
export const user_login = (data) => {
  return http({
    name: "user_login",
    data,
  });
};

// 发送验证码
export const send_code = (data) => {
  return http({
    name: "send_code",
    data,
  });
};
