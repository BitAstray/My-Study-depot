/*
 * @Author: Astray
 * @Date: 2023-06-02 14:49:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-22 12:08:33
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\api\blog.js
 */
import request from "./request";

/**
 * @description: 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * @description: 获取博客分类
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}

/**
 * @description: 获取单篇博客
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * @description: 提交评论
 */
export async function postComment(data) {
  return await request.post("/api/comment", data);
}

/**
 * @description: 获取
 */
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
