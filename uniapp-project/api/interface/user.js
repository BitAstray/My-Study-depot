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

// 修改保存文章作者状态
export const update_follow_author = (data) => {
  return http({
    name: "update_follow_author",
    data,
  });
};

// 改变点赞状态
export const update_compliments = (data) => {
  return http({
    name: "update_compliments",
    data,
  });
};

// 获取收藏文章
export const get_follow_article = (data) => {
  return http({
    name: "get_follow_article",
    data,
  });
};

// 获取关注作者
export const get_follow_author = (data) => {
  return http({
    name: "get_follow_author",
    data,
  });
};

// 检查下载
export const get_current_version = (data) => {
  return http({
    name: "get_current_version",
    data,
  });
};
