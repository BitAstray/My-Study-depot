/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-04 22:34:43
 * @FilePath: \Code\09. JavaScript语言提升\09. async和await\练习题\p2.js
 */
// 完成delay函数
// 该函数可以等待一段指定的时间
// 返回Promise
function delay(duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

// 利用delay函数，等待3次，每次等待1秒，每次等待完成后输出ok
// 等待1秒->ok->等待1秒->ok->等待1秒->ok
(async () => {
  for (let i = 0; i < 3; i++) {
    await delay(1000);
    console.log("ok");
  }
})();
