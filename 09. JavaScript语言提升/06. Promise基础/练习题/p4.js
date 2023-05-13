/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-20 21:28:55
 * @FilePath: \Code\09. JavaScript语言提升\06. Promise基础\练习题\p4.js
 */
// 下面的任务最终状态是什么，相关的数据或失败原因是什么，最终输出什么

new Promise((resolve, reject) => {
  console.log("任务开始"); //opending
  resolve(1); //fulfilled
  reject(2); //失败，过程不可逆，状态一旦更变不能更改
  resolve(3); //失败，过程不可逆，状态一旦更变不能更改
  console.log("任务结束");
});

new Promise((resolve, reject) => {
  console.log("任务开始"); //opending
  resolve(1); //fulfilled
  resolve(2); //失败，过程不可逆，状态一旦更变不能更改
  console.log("任务结束");
});
