//* 发布订阅模式 主要分成两个部分 on emit
//* on 把一些函数维护到数组
//* emit 让数组里的函数依次执行

let fs = require("fs");

let event = {
  arr: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit() {
    this.arr.forEach(fn => fn());
  },
};

let school = {};

event.on(function () {
  console.log("读取完毕");
});

event.on(function () {
  if (Object.keys(school).length === 2) {
    console.log(school);
  }
});

fs.readFile("./name.txt", "utf8", function (err, data) {
  school.name = data;
  event.emit();
});

fs.readFile("./age.txt", "utf8", function (err, data) {
  school.age = data;
  event.emit();
});
