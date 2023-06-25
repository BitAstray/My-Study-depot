/*
 * @Author: Astray
 * @Date: 2023-06-21 19:52:37
 */
import request from "@/utils/request";

//分页获取评论
export function getComment(page = 1, limit = 10, blogid = -1) {
  return request({
    url: "/api/comment",
    method: "get",
    params: {
      page,
      limit,
      blogid,
    },
  });
}

//删除评论
export function deleteComment(id) {
  return request({
    url: `/api/comment/${id}`,
    method: "delete",
  });
}
