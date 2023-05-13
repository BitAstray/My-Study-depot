/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-18 23:12:39
 * @FilePath: \Code\09. JavaScript语言提升\04. 函数\练习题\p3.js
 */
const counter = {
  count: 0,
  // 完成该函数，调用该函数后，每隔一秒就会增加count的值，然后输出它
  startIncrease() {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};

counter.startIncrease();
