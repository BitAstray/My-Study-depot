/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 15:42:48
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 18:45:14
 * @FilePath: \Code\JS收官\02.核心概念\01.数据的存储和传递\练习题\4.js
 */
/**
 * 修改对象，仅保留需要的属性
 * @param {Object} obj 要修改的对象
 * @param {Array<string>} keys 需要保留的属性名数组
 */
function pick(obj, keys) {
  var newObj = {};
  for (const key in obj) {
    var isFind = false;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        isFind = true;
        break;
      }
    }
    if (!isFind) {
      delete obj[key];
    }
  }
}

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

pick(obj, ["a", "d"]);

console.log(obj);
