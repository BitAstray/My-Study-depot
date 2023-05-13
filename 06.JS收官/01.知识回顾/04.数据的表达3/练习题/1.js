/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-02 12:27:40
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-02 12:41:23
 * @FilePath: \Code\JS收官\知识回顾\04.数据的表达3\练习题\1.js
 */
/* 
邓哥，男，身高185
有邓嫂二位：
其一名为翠花，东北人
其二名为丧彪，铜锣湾人

用字面量描述上面的信息
*/

var deng = {
  name: "邓哥",
  sex: "男",
  身高: 185,
  wifes: [
    { name: "翠花", where: "东北" },
    { name: "丧彪", where: "铜锣湾" },
  ],
};

console.log(deng);
console.log(deng.wifes.length);
