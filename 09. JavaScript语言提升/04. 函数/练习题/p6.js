/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-18 23:40:34
 * @FilePath: \Code\09. JavaScript语言提升\04. 函数\练习题\p6.js
 */
// 根据下面的调用示例，编写User类

// function User(username, password) {
//   this.username = username;
//   this.password = password;
// }

// User.prototype.sayHello = function () {
//   console.log(`账号 —— ${this.username}，密码 ——  ${this.password}`);
// };

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  sayHello() {
    console.log(`账号 —— ${this.username}，密码 ——  ${this.password}`);
  }
}

const u = new User("account", "pwd123"); // 创建用户
u.sayHello(); // 输出：账号 —— account，密码 —— pwd123
