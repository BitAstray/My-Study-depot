/*
 * @Author: BitCreate
 * @Date: 2023-03-12 21:16:15
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-14 17:29:01
 * @FilePath: \Code\Code\JS收官\03.标准库\16.数字和字符串\练习题\4.js
 */
// 将下面的rgb格式转换成为HEX格式
var rgb = "rgb(253, 183, 25)";

var part = rgb.replace("rgb", "").replace(")", "").replace("(", "").split(",");

part[0] = parseInt(part[0]).toString(16);
part[1] = parseInt(part[1]).toString(16);
part[2] = parseInt(part[2]).toString(16);

var rgb = "#" + part[0] + part[1] + part[2];
console.log(rgb);
