/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-18 16:00:34
 * @FilePath: \Code\09. JavaScript语言提升\03. 对象\练习题\p1.js
 */
/**
 * 创建一个用户对象
 * 对象格式：
 * {
 *    firstName: xxx,
 *    lastName: xxx,
 *    fullName: xxx,
 *    sayHello: fn
 * }
 */
function createUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
    sayHello() {
      console.log("hello");
    },
  };
}

// 调用createUser函数，使用解构得到fullName
const { fullName } = createUser("bit", "create");
console.log(fullName);
