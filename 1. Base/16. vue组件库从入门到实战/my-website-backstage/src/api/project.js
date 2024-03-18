/*
 * @Author: Astray
 * @Date: 2023-06-21 14:14:23
 */
import request from "@/utils/request";
// 获取验证码

// 获取所有项目
export function getProject() {
  return request({
    url: "/api/project",
    method: "get",
  });
}

// 添加项目
export function addProject(data) {
  return request({
    url: "/api/project",
    method: "post",
    data,
  });
}

// 删除项目
export function deleteProject(projectID) {
  return request({
    url: `/api/project/${projectID}`,
    method: "DELETE",
  });
}

// 编辑项目
export function editProject(projectInfo) {
  return request({
    url: `/api/project/${projectInfo.id}`,
    method: "put",
    data: projectInfo,
  });
}
