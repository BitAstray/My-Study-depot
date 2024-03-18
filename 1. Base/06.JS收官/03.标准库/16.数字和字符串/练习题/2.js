/*
 * @Author: BitCreate
 * @Date: 2023-03-12 21:16:15
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-14 17:15:18
 * @FilePath: \Code\Code\JS收官\03.标准库\16.数字和字符串\练习题\2.js
 */
// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
var str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.";
var arrStr = str.split(" ");
console.log(arrStr);

for (var i = 0; i < arrStr.length; i++) {
  // if (arrStr[i].endsWith(",") || arrStr[i].endsWith(".")) {
  //   arrStr[i] = arrStr[i].substring(0, arrStr[i].length - 1);
  // }
  // }
  arrStr[i] = arrStr[i].replaceAll(",", "").replaceAll(".", "");
}

console.log(arrStr);
