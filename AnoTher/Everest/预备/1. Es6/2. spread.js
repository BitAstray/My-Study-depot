/*
 * @Author: BitCreate
 * @Date: 2024-03-03 13:48:27
 */
//?  ... 展开运算符

//* 1) 用于数组
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//* 2) 用于对象
// let school = { name: "school" };
// let my = { age: { count: 18 }, name: "my" };
//* 深拷贝 浅拷贝
//* ... 只能拷贝一层
// let newMy = { ...my, age: { ...my.age } };
// let all = { ...school, ...newMy };
// my.age.count = 20;
// console.log(all);

//! 可以把对象转换成字符串 再转换成对象
//* Object.assign = ...
// let school = { name: "school", fn: function () {} };
// let my = { age: { count: 18 }, name: "my" };
// let all = JSON.parse(JSON.stringify({ ...school, ...my }));
// my.age.count = 20;
// console.log(all);

//* 自己实现深拷贝方法 (递归拷贝 一层层拷贝)
//* 掌握类型判断 typeof instanceof Object.prototype.toString.call constructor
function deepClone(obj, hash = new WeakMap()) {
  // 1) 判断是不是null undefined
  if (obj == null) return obj;
  // 2) 判断是不是对象
  if (typeof obj !== "object") return obj;
  // 3) 判断是不是正则
  if (obj instanceof RegExp) return new RegExp(obj);
  // 4) 判断是不是日期
  if (obj instanceof Date) return new Date(obj);
  // 5) 是数组或者对象

  if (hash.get(obj)) return hash.get(obj); //如果weakmap中有对象就直接返回
  let cloneObj = new obj.constructor();
  // 如果是对象把他放到weakMap中，下次再遇到这个对象就直接返回
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //如果赋予的值是对象 我就把这个对象放到weakmap中
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
//* map weakMap set 集合 map 映射表
let obj = { age: { name: 123 } };
obj.xxx = obj;
let n = deepClone(obj);
console.log(n);
