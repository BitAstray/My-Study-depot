// 类型兼容性

interface Duck {
  sound: "嘎嘎嘎";
  swin(): void;
}

let person = {
  name: "伪装成鸭子的人",
  age: 11,
  sound: "嘎嘎嘎" as "嘎嘎嘎",
  swin() {
    console.log(this.name + "正在游泳", "嘎嘎嘎");
  },
};

let duck: Duck = person;

// 函数类型
