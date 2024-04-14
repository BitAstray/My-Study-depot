/*
 * @Author: Astray
 * @Date: 2023-04-17 13:32:29
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-17 17:12:40
 * @FilePath: \Code\04.HTML+CSS语言提升(H5 + CSS3)\08. H5综合练习\demo1.js
 */

var doms = {
  // 视频元素
  video: document.querySelector("video"),
  btnPlay: document.querySelector("#btnPlay"),
  // 进度条相关元素
  progress: {
    // 进度条
    range: document.querySelector("#progress"),
    // 当前播放时间
    current: document.querySelector("#current"),
    // 总时间
    total: document.querySelector("#total"),
  },
  // 播放倍率的容器
  rate: document.querySelector("#rate"),
  // 音量相关元素
  volume: {
    // 滑动块
    range: document.querySelector("#volume input"),
    // 文本
    text: document.querySelector("#volume span"),
  },
  // 保存和设置按钮
  buttons: {
    save: document.querySelector("#save"),
    load: document.querySelector("#load"),
  },
  controls: document.querySelectorAll(".controls"),
};

// 所有的倍率按钮,
btnRates = rate.querySelectorAll("button");

//* 视频第一帧加载完成时初始化
doms.video.addEventListener("loadeddata", init);
function init() {
  setProgress();
  setRate();
  setVolume();
  for (var i = 0; i < doms.controls.length; i++) {
    doms.controls[i].style.display = "block";
  }
}

/**
 * @description: 根据当前视频进度，设置进度条的状态
 */
function setProgress() {
  // 1. 设置文本
  doms.progress.current.innerText = formatTime(doms.video.currentTime);
  doms.progress.total.innerText = formatTime(doms.video.duration);
  formatTime(4822);
  // 2. 设置进度条啊
  doms.progress.range.min = 0;
  doms.progress.range.max = doms.video.duration;
  doms.progress.range.value = doms.video.currentTime;
}

/**
 * @description: 设置播放速率
 */
function setRate() {
  for (var i = 0; i < btnRates.length; i++) {
    if (+btnRates[i].dataset.rate === doms.video.playbackRate) {
      btnRates[i].classList.add("active");
    } else {
      btnRates[i].classList.remove("active");
    }
  }
}

/**
 * @description: 设置音量状态
 */
function setVolume() {
  //  1. 设置文本
  var percent = Math.floor(doms.video.volume * 100);
  if (doms.video.muted) {
    percent = 0;
  }
  doms.volume.text.innerText = percent + "%";
  doms.volume.range.value = percent;
}

/**
 * @description: 格式化时间
 * @param {*} sec 秒数
 * @return {String}
 */
function formatTime(sec) {
  var hour = Math.floor(sec / 3600)
    .toString()
    .padStart(2, 0);
  var min = Math.floor((sec % 3600) / 60)
    .toString()
    .padStart(2, 0);
  var secs = Math.floor(sec % 60)
    .toString()
    .padStart(2, 0);

  return hour + ":" + min + ":" + secs;
}

//* 交互

doms.btnPlay.addEventListener("click", function (e) {
  if (doms.video.paused) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
});

doms.progress.range.addEventListener("input", function () {
  doms.video.currentTime = this.value;
  setProgress();
});

doms.video.addEventListener("timeupdate", function () {
  setProgress();
});

for (var i = 0; i < btnRates.length; i++) {
  btnRates[i].addEventListener("click", function (e) {
    doms.video.playbackRate = +this.dataset.rate;
    setRate();
  });
}

doms.volume.range.addEventListener("input", function () {
  doms.video.volume = this.value / 100;
  setVolume();
});

doms.buttons.save.addEventListener("click", function () {
  var obj = {
    currentTime: doms.video.currentTime,
    playbackRate: doms.video.playbackRate,
    volume: doms.video.volume,
  };

  localStorage.setItem("playState", JSON.stringify(obj));
});

doms.buttons.load.addEventListener("click", function () {
  var playState = JSON.parse(localStorage.getItem("playState"));
  doms.video.currentTime = playState.currentTime;
  doms.video.playbackRate = playState.playbackRate;
  doms.video.volume = playState.volume;
  setProgress();
  setRate();
  setVolume();

  doms.video.play();
});
