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
