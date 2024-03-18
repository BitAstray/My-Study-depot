/*
 * @Author: Astray
 * @Date: 2023-04-10 16:50:09
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-10 18:54:45
 * @FilePath: \Code\03.JS项目实战\04.实现三级联动效果\index.js
 */

var provinceDom = document.querySelector("#province");
var cityDom = document.querySelector("#city");
var schoolDom = document.querySelector("#school");

//*1. 渲染省会列表
for (var prop in province) {
  provinceDom.appendChild(createOption(prop, province[prop]));
}

//*2. 根据所选省会，展示城市
provinceDom.addEventListener("change", function () {
  var value = provinceDom.value;
  var cityObj = city[value];
  // 清空所有选项
  cityDom.innerHTML = "";
  // 渲染新的选项
  for (var prop in cityObj) {
    cityDom.appendChild(createOption(prop, cityObj[prop]));
  }

  // 展示该城市下的学校
  createSchools();
});

//*3. 根据所选城市，展示学校

cityDom.addEventListener("change", createSchools);

/**
 * @description: 创建一个option
 * @return {HTMLOptionElement}}
 */
function createOption(key, value) {
  var option = document.createElement("option");
  option.value = key;
  option.innerText = value;

  return option;
}

/**
 * @description: 创建学校
 */
function createSchools() {
  var value = cityDom.value;
  var schoolArr = allschool[value];
  schoolDom.innerHTML = "";
  for (var i = 0; i < schoolArr.length; i++) {
    schoolDom.appendChild(createOption(i, schoolArr[i]));
  }
}
