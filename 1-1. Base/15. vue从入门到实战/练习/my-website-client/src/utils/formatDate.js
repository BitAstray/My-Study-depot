/*
 * @Author: Astray
 * @Date: 2023-06-02 21:13:04
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-08 22:57:54
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\utils\formatDate.js
 */
export default function formatDate(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  let str = `${year}-${month}-${day}`;
  if (showTime) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    str += ` ${hour}:${minute}:${second}`;
  }

  return str;
}
