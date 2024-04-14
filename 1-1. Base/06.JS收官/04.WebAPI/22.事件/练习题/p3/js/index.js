/*
 * @Author: BitCreate
 * @Date: 2023-03-16 17:08:06
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-24 15:51:34
 * @FilePath: \Code\JS收官\04.WebAPI\22.事件\练习题\p3\js\index.js
 */
// 输入待办事项，按下回车后，添加事项到列表
var txt = document.querySelector(".section .txt");
var ul = document.querySelector(".todo-list");
console.log(ul);
txt.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.key === "Enter") {
    if (!this.value.trim()) {
      return;
    }
    var li = document.createElement("li");
    var span = document.createElement("span");
    var button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = this.value;
    button.innerText = "删除";
    button.addEventListener("click", delItem);

    ul.appendChild(li);
    this.value = "";
  }
});
// 点击删除后，删除对应的待办事项

function delItem() {
  this.parentElement.remove();
}
