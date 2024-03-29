/*
 * @Author: BitCreate
 * @Date: 2024-03-19 20:44:17
 */
import http from "../../utils/http";

export const get_label_list = () => {
  return http({
    name: "get_label_list",
  });
};

export const get_article_list = (data) => {
  return http({
    name: "get_article_list",
    data,
  });
};

// 收藏或取消文章
export const update_save_like = (data) => {
  return http({
    name: "update_save_like",
    data,
  });
};

// 获取搜索文章内容
export const get_search_data = (data) => {
  return http({
    name: "get_search_data",
    data,
  });
};

// 修改用户保存的选项卡标签
export const update_label_ids = (data) => {
  return http({
    name: "update_label_ids",
    data,
  });
};

// 获取文章详情
export const get_article_detail = (data) => {
  return http({
    name: "get_article_detail",
    data,
  });
};

// 添加评论
export const add_comment = (data) => {
  return http({
    name: "add_comment",
    data,
  });
};

// 获取评论列表
export const get_comment_list = (data) => {
  return http({
    name: "get_comment_list",
    data,
  });
};
