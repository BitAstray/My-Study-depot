/*
 * @Author: BitCreate
 * @Date: 2024-03-05 21:31:27
 */
/**
 * @description: 判断是否是对象
 * @param {*} data
 * @return {Boolean}
 */
export function isObject(data) {
  return typeof data === "object" && data !== null;
}

/**
 * @description: 定义不可枚举的属性
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
export function def(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: false,
    configurable: false,
    value,
  });
}

/**
 * @description: 代理属性
 * @param {*} vm
 * @param {*} source
 * @param {*} key
 */
export function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}
