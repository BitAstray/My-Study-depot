/*
 * @Author: Astray
 * @Date: 2023-06-18 21:04:02
 */
import request from "@/utils/request";

// 分页获取文章列表
export function getBlog(page = 1, limit = 10) {
  return request({
    url: "/api/blog",
    method: "get",
    params: {
      page,
      limit,
    },
  });
}

// 查找某一篇文章
export function findOneBlog(blogId) {
  return request({
    url: `/api/blog/${blogId}`,
    method: "get",
  });
}

// 删除文章
export function deleteBlog(blogId) {
  return request({
    url: `/api/blog/${blogId}`,
    method: "delete",
  });
}

// 添加文章
export function addBlog(data) {
  return request({
    url: `/api/blog`,
    method: "post",
    data,
  });
}

// 修改文章
export function editBlog(blogInfo) {
  return request({
    url: `/api/blog/${blogInfo.id}`,
    method: "put",
    data: blogInfo.data,
  });
}

// 获取文章分类列表
export function getBlogTypes() {
  return request({
    url: `/api/blogtype`,
    method: "get",
  });
}

// 删除文章分类信息
export function deleteBlogType(blogTypeId) {
  return request({
    url: `/api/blogtype/${blogTypeId}`,
    method: "delete",
  });
}

// 修改文章分类信息
export function putBlogType(blogTypeInfo) {
  return request({
    url: `/api/blogtype/${blogTypeInfo.id}`,
    method: "put",
    data: blogTypeInfo,
  });
}

// 获取单个文章分类
export function getBlogType(blogTypeId) {
  return request({
    url: `/api/blogtype/${blogTypeId}`,
    method: "get",
  });
}

//添加文章分类
export function addBlogType(data) {
  return request({
    url: `/api/blogtype`,
    method: "post",
    data,
  });
}
