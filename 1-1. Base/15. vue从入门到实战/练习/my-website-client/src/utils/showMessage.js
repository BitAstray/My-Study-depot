/*
 * @Author: Astray
 * @Date: 2023-05-30 13:22:10
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-30 21:36:02
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\utils\showMessage.js
 */
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * @description:
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 显示时间
 * @param {HTMLElement} container 消息显示到该容器正中，不传则显示到页面中心
 * @return {*}
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  // 设置样式
  div.className = `${styles.message} ${styles["message-" + type]}`;
  // 将div加入到容器中

  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);

  // 浏览器强制渲染
  div.clientHeight; //导致reflow

  // 回到正常位置
  div.style.opacity = 1;
  div.style.transform = "translate(-50%, -50%)";

  // 等一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        // 运行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
