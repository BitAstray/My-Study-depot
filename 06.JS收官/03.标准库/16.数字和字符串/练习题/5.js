/*
 * @Author: BitCreate
 * @Date: 2023-03-12 21:16:15
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-14 17:43:50
 * @FilePath: \Code\Code\JS收官\03.标准库\16.数字和字符串\练习题\5.js
 */
// name转换成驼峰命名
var name = "has own property"; // --> hasOwnProperty
var name2 = "";

var arr = name.split(" ");

for (var i = 0; i < arr.length; i++) {
  if (i > 0) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  name2 += arr[i];
}

console.log(name2);
