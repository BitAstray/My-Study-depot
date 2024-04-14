/*
 * @Author: Astray
 * @Date: 2023-05-13 15:54:28
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-14 17:18:48
 * @FilePath: \Code\13. 第三方库\练习\01. jQuery\index.js
 */
// 找到全选多选框, 注册change事件
$(function () {
  $(".checkAll").change(function () {
    // 设置其他所有的多选框的选中状态
    $(":checkbox").not(this).prop("checked", this.checked);
    setTotal();
  });

  // 改变选中时更变信息
  $(".checkItem").change(function () {
    setTotal();
  });

  // 改变数量+
  $(".item .incr").click(function (e) {
    e.preventDefault();
    const inp = $(this).prev();
    const newNumber = +inp.val() + 1;
    changeNubmer(newNumber, inp);
  });

  // 改变数量-
  $(".item .decr").click(function (e) {
    e.preventDefault();
    const inp = $(this).next();
    const newNumber = +inp.val() - 1;
    changeNubmer(newNumber, inp);
  });

  // 删除
  $(".item .del a").click(function (e) {
    e.preventDefault();
    $(this).parents(".item").remove();
    setTotal();
  });

  // 删除选中
  $(".delChecked").click(function (e) {
    e.preventDefault();
    $(".checkItem:checked").parents(".item").remove();
    setTotal();
  });

  $(".clearAll").click(function (e) {
    e.preventDefault();
    $(".item").remove();
    setTotal();
  });

  /**
   * @description: 设置汇总信息
   */
  function setTotal() {
    let sum = 0;
    const checked = $(".checkItem:checked");
    checked.each((i, dom) => {
      sum += +$(dom).parents(".item").find(".sum em").text().replace("￥", "");
    });

    // 设置总价和总数
    $(".footer .nums em").text(checked.length);
    $(".footer .sums em").text("￥" + sum.toFixed(2));
  }

  function changeNubmer(newNumber, inp) {
    if (newNumber < 1) {
      newNumber = 1;
    }
    inp.val(newNumber);
    const price = +inp
      .parents(".item")
      .find(".price em")
      .text()
      .replace("￥", "");
    inp
      .parents(".item")
      .find(".sum em")
      .text("￥" + (price * newNumber).toFixed(2));
    setTotal();
  }
});
