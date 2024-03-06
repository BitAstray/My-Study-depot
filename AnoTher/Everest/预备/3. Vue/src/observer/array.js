/*
 * @Author: BitCreate
 * @Date: 2024-03-06 13:07:22
 */

// 重写数组的哪些方法 7个 push shift unshift pop reverse sort splice 会导致数组本身发生变化
// slice() concat() 不会改变原数组，所以不需要重写
let oldArrayMethods = Array.prototype;
// value.__proto__ = arrayMethods
// arrayMethods.__proto__ = oldArrayMethods
export let arrayMethods = Object.create(oldArrayMethods);

const methods = [
  "push",
  "shift",
  "unshift",
  "pop",
  "reverse",
  "sort",
  "splice",
];

methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    const result = oldArrayMethods[method].apply(this, args); //调用原生的数组方法
    // push unshift 添加的元素可能还是一个对象
    let inserted; // 当前用户插入的元素
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice": // 3个  新增的属性
        inserted = args.slice(2);
      default:
        break;
    }
    if (inserted) this.__ob__.observeArray(inserted); // 将新增属性继续观测

    return result;
  };
});
