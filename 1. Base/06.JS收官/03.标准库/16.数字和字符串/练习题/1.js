/*
 * @Author: BitCreate
 * @Date: 2023-03-12 21:16:15
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-14 17:10:09
 * @FilePath: \Code\Code\JS收官\03.标准库\16.数字和字符串\练习题\1.js
 */
// 生成一个a-z的字符串

var str = "";
for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  str += String.fromCharCode(i);
}
console.log(str);
