/*
 * @Author: BitCreate
 * @Date: 2024-03-05 21:26:33
 */

import { isObject, def } from "../util/index";
import { arrayMethods } from "./array";

class Observer {
  constructor(value) {
    def(value, "__ob__", this); // 我给对象和数组添加一个自定义属性
    if (Array.isArray(value)) {
      // 如果是数组的话并不会对索引进行观测，因为会导致性能问题
      // 前端开发中很少很少去操作索引，一般会使用push shift unshift pop sort reverse splice
      value.__proto__ = arrayMethods; // 重写数组的方法
      // 如果数组里放的是对象我再监控
      this.observeArray(value);
    } else {
      this.walk(value);
    }
    // vue如果数据的层次过多 需要递归的去解析对象中的属性，依次增加set和get方法
  }
  walk(data) {
    let keys = Object.keys(data);
    keys.forEach(key => {
      defineReactive(data, key, data[key]); //定义响应式数据
    });
  }
  observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      observe(value[i]);
    }
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
