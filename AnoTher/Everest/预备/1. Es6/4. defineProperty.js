/*
 * @Author: BitCreate
 * @Date: 2024-03-03 16:09:44
 */
//* Object.defineProperty

// let obj = {};
// let other = "";
// // 不可枚举 函数的原型 Array.property
// Object.defineProperty(obj, "name", {
//   // writable: false, //能否修改
//   enumerable: true, //能否枚举
//   configurable: true, //能否删除
//   get() {
//     console.log("-----");
//     return other;
//   },
//   set(val) {
//     other = val;
//   },
// });
// obj.name = 456;
// console.log(obj.name);

// let obj = {
//   other: "",
//   get name() {
//     return this.other;
//   },
//   set name(val) {
//     this.other = val;
//   },
// };
// obj.name = 456;
// console.log(obj.name);

//* 对象的setter和getter

//? vue的数据劫持 (把所有的属性都改成get和set)

function update() {
  //模拟的更新方法
  console.log("更新视图");
}

let data = {
  name: "BitCreate",
  age: 18,
  address: {
    location: "荆州",
  },
};

function observer(obj) {
  //Object.defineProperty只能用在对象上 （数组也不识别）
  if (typeof obj !== "object") return obj;
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

function defineReactive(obj, key, value) {
  observer(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(val) {
      if (val !== value) {
        observer(val);
        update();
        value = val;
      }
    },
  });
}

observer(data);
data.address = [1, 2, 3];

let methods = ["push", "slice", "shift", "unshift", "sort", "reverse"];
methods.forEach((method) => {
  let old = Array.prototype[method];
  Array.prototype[method] = function () {
    update();
    old.call(this, ...arguments);
  };
});

data.address.push(4);
data.address.push(4);
