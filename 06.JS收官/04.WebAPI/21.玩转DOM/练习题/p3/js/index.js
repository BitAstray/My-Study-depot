/*
 * @Author: BitCreate
 * @Date: 2023-03-15 21:13:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-16 16:00:07
 * @FilePath: \JS收官\04.WebAPI\21.玩转DOM\练习题\p3\js\index.js
 */
/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */

function $(select) {
  return document.querySelector(select);
}

function setSubmitButtonStatus() {
  var agree = $(".policy input");
  var btn = $('button[type="submit"]');
  // console.log(agree, btn);
  btn.disabled = !agree.checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  $(".captcha button").disabled = $("#textPhone").value.length !== 11;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  var sel = $("select");
  var choose = $("#selChoose");
  var loves = [];
  for (var i = 0; i < sel.children.length; i++) {
    var option = sel.children[i];
    if (option.selected) {
      loves.push(option.innerText);
    }
  }
  choose.innerText += loves.join(",");
}
