/*
 * @Author: Astray
 * @Date: 2023-05-29 16:30:36
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-16 12:35:49
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\router\routes.js
 */

export default [
  {
    name: "Home",
    path: "/",
    component: async () => import(/*webpackChunkName: "home"*/ "@/views/Home"),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/*webpackChunkName: "blog"*/ "@/views/About"),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: () => import(/*webpackChunkName: "blog"*/ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: () => import(/*webpackChunkName: "blog"*/ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: () =>
      import(/*webpackChunkName: "blogdetail"*/ "@/views/Blog/Detail"),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: () => import(/*webpackChunkName: "project"*/ "@/views/Project"),
    meta: {
      title: "我的项目",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: () => import(/*webpackChunkName: "message"*/ "@/views/Message"),
    meta: {
      title: "留言板",
    },
  },
];
