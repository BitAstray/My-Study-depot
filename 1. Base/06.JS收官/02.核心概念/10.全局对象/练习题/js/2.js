/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-06 20:12:29
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-06 21:11:21
 * @FilePath: \Code\JS收官\02.核心概念\10.全局对象\练习题\js\2.js
 */

(function () {
  var a = 3; // 避免污染
  var b = 4; // 避免污染

  // 使用 1.js 暴露的函数和变量
  expose.sayHi();
  console.log(expose.count);
})();
