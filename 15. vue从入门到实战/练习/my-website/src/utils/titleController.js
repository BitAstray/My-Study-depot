/*
 * @Author: Astray
 * @Date: 2023-06-14 22:47:06
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 22:57:16
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\utils\titleController.js
 */
// 网站标题控制

let routeTitle = "",
  siteTitle = "";
function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = "loading...";
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle;
  } else {
    document.title = routeTitle + "-" + siteTitle;
  }
}
export default {
  setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();
  },
};
