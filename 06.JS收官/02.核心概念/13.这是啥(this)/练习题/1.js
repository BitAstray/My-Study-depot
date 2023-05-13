/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-07 16:49:45
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-07 19:50:45
 * @FilePath: \Code\JS收官\02.核心概念\13.这是啥(this)\练习题\1.js
 */
var person1 = {
  name: "monica",
  age: 17,
  sayHi: function () {
    // 完成该方法，打印姓名和年龄
    console.log(this.name, this.age);
  },
};

person1.sayHi();
