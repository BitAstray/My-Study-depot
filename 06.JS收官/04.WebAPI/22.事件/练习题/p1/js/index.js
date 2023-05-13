/*
 * @Author: BitCreate
 * @Date: 2023-03-15 21:13:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-21 16:28:07
 * @FilePath: \JS收官\04.WebAPI\22.事件\练习题\p1\js\index.js
 */

function $(select) {
  return document.querySelector(select);
}

/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  var btn = $('button[type="submit"]');
  // console.log(agree, btn);
  btn.disabled = !$(".policy input").checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  // console.log(this);
  $(".captcha button").disabled = $("#txtPhone").value.length !== 11;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  var sel = $("select");
  var choose = $("#selChoose");
  var loves = [];
  choose.innerText = loves;
  for (var i = 0; i < sel.children.length; i++) {
    var option = sel.children[i];
    if (option.selected) {
      loves.push(option.innerText);
    }
  }
  choose.innerText += loves.join(",");
}

setSubmitButtonStatus();
setSendCodeButtonStatus();
setSelectedLoves();

// 将函数与用户时间连接
$("#txtPhone").addEventListener("input", setSendCodeButtonStatus);
$(".policy input").addEventListener("change", setSubmitButtonStatus);
$("select").addEventListener("change", setSelectedLoves);

// 给所有的文本框注册，用户在输入过程按下ESC，则清空文本框
var txts = document.querySelectorAll(".txt");
for (var i = 0; i < txts.length; i++) {
  txts[i].addEventListener("keydown", hanleKeyDown);
}

function hanleKeyDown(e) {
  if (e.key === "Escape") {
    this.value = "";
  }
}
