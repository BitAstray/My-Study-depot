/*
 * @Author: BitCreate
 * @Date: 2024-03-05 21:26:33
 */

import { isObject } from "../util/index";

class Observer {
  constructor(value) {
    // vue如果数据的层次过多 需要递归的去解析对象中的属性，依次增加set和get方法
    this.walk(value);
  }
  walk(data) {
    let keys = Object.keys(data);
    keys.forEach(key => {
      defineReactive(data, key, data[key]); //定义响应式数据
    });
  }
}

const defineReactive = (data, key, value) => {
  // 递归实现深度检测
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      // 获取值的时候做一些操作
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      observe(newValue); // 如果用户赋值一个新对象
      value = newValue;
    },
  });
};

// 把data中的数据 都使用Object.defineProperty重新定义 es5
// Object.defineProperty() 不能兼容ie8及以下
export function observe(data) {
  let isObj = isObject(data);
  if (!isObj) {
    return;
  }
  return new Observer(data); //用来观测数据
}
