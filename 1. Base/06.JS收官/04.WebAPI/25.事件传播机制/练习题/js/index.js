/*
 * @Author: Astray
 * @Date: 2023-03-24 14:12:57
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-24 15:56:38
 * @FilePath: \Code\JS收官\04.WebAPI\25.事件传播机制\练习题\js\index.js
 */
// 输入待办事项，按下回车后，添加事项到列表
// 使用事件委托的方式完成删除事件

var txt = document.querySelector(".section .txt");
var ul = document.querySelector(".todo-list");
console.log(ul);
txt.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.key === "Enter") {
    if (!this.value.trim()) {
      return;
    }
    ul.innerHTML +=
      "<li><span>" + this.value + "</span><button>删除</button></li>";
    // var li = document.createElement("li");
    // var span = document.createElement("span");
    // var button = document.createElement("button");
    // li.appendChild(span);
    // li.appendChild(button);
    // span.innerText = this.value;
    // button.innerText = "删除";
    // ul.appendChild(li);
    this.value = "";
  }
});

// 点击删除后，删除对应的待办事项
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
