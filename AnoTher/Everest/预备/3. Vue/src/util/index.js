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
