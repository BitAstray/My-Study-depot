/*
 * @Author: Astray
 * @Date: 2023-03-28 15:51:30
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-28 15:55:37
 * @FilePath: \Code\JS收官\02.核心概念\31.异常\1.js
 */
try {
  // 代码1
  console.log("try starting");
  var a;
  console.log(a.name);
  console.log("try ending");
} catch (err) {
  // 代码2：代码1出现异常，执行这里的代码，异常对象传递给err
  console.log("catch: " + err.message);
} finally {
  // 代码3: 可以省略.无论是否异常，都会执行
  console.log("finally ending");
}
