/*
 * @Author: BitCreate
 * @Date: 2023-03-15 14:19:58
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-15 15:04:11
 * @FilePath: \JS收官\03.标准库\19.数组\练习题\4.js
 */
// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

var filename = "d://files/mymap/3.jpg";

// 1.得到文件的后缀名
var index = filename.lastIndexOf(".");
var extname = filename.substring(index);

// 2.判断后缀名是否合法
var extanmes = [".jpg", ".gif", ".bmp", ".webp", ".png"];

// if (extanmes.indexOf(extname) === -1) {
//   console.log(extname + "不是合法的后缀名合法");
// } else {
//   console.log(extname + "是合法的后缀名");
// }


if (extanmes.includes(extname)) {
  console.log(extname + "是合法的后缀名");
} else {
  console.log(extname + "不是合法的后缀名合法");
}
