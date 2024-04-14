/*
 * @Author: Astray
 * @Date: 2023-03-29 22:50:15
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-10 16:47:50
 * @FilePath: \Code\03.JS项目实战\03.动态排序表格\index.js
 */

/* 
  1. 复选框的关联操作
    1-1 全选 全选事件绑定的
    1-2 获取全选按钮选中状态
    1-3 将这个选中状态赋值给下面tbody里面的复选框 checked = checkStatus
    1-4 处理tbody里面的复选框
    1-5 通过时间委托的形式为每一个复选框进行事件绑定（有可能是未来元素）
  2. 表格排序的实现
    2-1 事件绑定
    2-2 获取指定的index的值
 */
(function () {
  var checkAll = document.querySelector("#checkAll");
  var tbody = document.querySelector("tbody");
  var checkOneList = tbody.querySelectorAll("input");
  var ths = document.querySelectorAll("th");
  var rows = tbody.querySelectorAll("tr");
  // 程序入口定义
  var init = function () {
    initEvents();
  };

  // 绑定所有的事件函数
  var initEvents = function () {
    checkAll.addEventListener("click", onCheckAllClick);
    tbody.addEventListener("click", onCheckOneListsClick);

    for (var i = 0; i < ths.length; i++) {
      // 使用闭包获取索引值
      handleThsClickFn(i, ths[i]);
    }
  };

  /**
   * @description: 全选按钮绑定函数
   */
  function onCheckAllClick() {
    // 获取dom节点的选中状态
    var checkStatus = this.checked;
    for (var i = 0; i < checkOneList.length; i++) {
      if (checkOneList[i].checked !== checkStatus) {
        checkOneList[i].checked = checkStatus;
      }
    }
  }

  /**
   * @description: tbody里面的复选框按钮绑定函数
   */
  var onCheckOneListsClick = function (e) {
    // 找到复选框触发事件
    var checkNumbers = 0;
    if (e.target.tagName !== "INPUT") return;

    for (var i = 0; i < checkOneList.length; i++) {
      if (checkOneList[i].checked) {
        checkNumbers++;
      }
    }
    checkAll.checked = checkNumbers === checkOneList.length;
  };

  // 定义th点击时间
  var handleThsClickFn = function (index, th) {
    if (index === 0) return;
    th.addEventListener("click", function (e) {
      // 排序
      var arr = Array.prototype.slice.call(rows).sort(function (a, b) {
        var c1 = a.querySelectorAll("td")[index].innerText;
        var c2 = b.querySelectorAll("td")[index].innerText;
        if (
          th.getAttribute("sort") === "down" ||
          th.getAttribute("sort") === null
        ) {
          if (index === 2 || index === 4) {
            return c1.localeCompare(c2, "zh");
          } else {
            return c1 - c2;
          }
        } else if (th.getAttribute("sort") === "up") {
          if (index === 2 || index === 4) {
            return c2.localeCompare(c1, "zh");
          } else {
            return c2 - c1;
          }
        }

        return result;
      });

      // 更改排序状态
      if (
        th.getAttribute("sort") === "down" ||
        th.getAttribute("sort") === null
      ) {
        th.setAttribute("sort", "up");
      } else if (th.getAttribute("sort") === "up") {
        th.setAttribute("sort", "down");
      }

      // 循环插入已排序好的值
      for (var i = 0; i < arr.length; i++) {
        // 节点已经存在，会将他移动到容器末尾
        tbody.appendChild(arr[i]);
      }
    });
  };

  init(); //入口调用
})();
