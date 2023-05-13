/*
 * @Author: Astray
 * @Date: 2023-05-05 14:36:24
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 16:19:39
 * @FilePath: \Code\10. 程序思维训练\练习\10-1. 歌词滚动\index.js
 */
/**
 * 从网络获取歌词数据
 * @returns Promise
 */
async function getLrc() {
  return await fetch("https://study.duyiedu.com/api/lyrics")
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

const doms = {
  ul: document.querySelector(".lrc"),
  audio: document.querySelector("audio"),
  container: document.querySelector(".container"),
};
let lrcData;

// 初始化
function init() {
  setLrc();
}

(async () => {
  await init();
})();

// 交互事件

doms.audio.addEventListener("timeupdate", function (event) {
  setStatus(this.currentTime);
});

/**
 * @description: 根据当前播放时间改变歌词状态
 * @param {*} time
 */
function setStatus(time) {
  // 1.根据时间找到最近的li
  const beforeLi = doms.ul.querySelector(".active");
  beforeLi && beforeLi.classList.remove("active");
  const index = lrcData.findIndex((lrc) => lrc.time > time) - 1;
  if (index < 0) {
    return;
  }
  const activeLi = lrcData[index].words
    ? doms.ul.children[index]
    : doms.ul.children[index - 1];
  // const activeLi = doms.ul.children[index];
  activeLi.classList.add("active");
  // 2.设置ul的滚动位置
  let moveY =
    activeLi.clientHeight * index +
    activeLi.clientHeight / 2 -
    doms.container.clientHeight / 2;
  moveY = -moveY;
  if (moveY > 0) {
    moveY = 0;
  }
  doms.ul.style.transform = "translateY(" + moveY + "px)";
}

/**
 * @description: 设置歌词
 */
async function setLrc() {
  const lrc = await getLrc();
  lrcData = lrc
    .split("\n")
    .filter((s) => s)
    .map((item) => {
      const timeParts = item.split("]")[0].replace("[", "").split(":");
      return {
        time: +timeParts[0] * 60 + +timeParts[1],
        words: item.split("]")[1],
      };
    });
  doms.ul.innerHTML = lrcData.map((item) => `<li>${item.words}</li>`).join("");
}
