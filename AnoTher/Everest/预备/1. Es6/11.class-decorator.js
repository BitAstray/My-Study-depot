/*
 * @Author: BitCreate
 * @Date: 2024-03-04 19:34:32
 */

//* 装饰器可以修饰类 类的属性 类的原型上的方法
//* 修饰的时候 就是把类 属性 传递给修饰的函数
// @flag
class Animal {
  @readonly
  PI = 3.14;
  constructor(name) {
    this.name = name;
    this.eat = "吃";
  }
  @before
  say(a, b, c) {
    console.log("说话", a, b, c, this);
  }
}

//* 1) 类的静态属性
// function flag(constructor) {
//   constructor.type = "哺乳类";
// }
// console.log(Animal.type);
// 装饰器
//* npm install @babel/plugin-proposal-decorators --dev

//* 2) 类的属性(实例上的属性)
function readonly(target, property, descriptor) {
  descriptor.writable = false;
  // setTimeout(() => {
  //   console.log(target == Animal.prototype); //类的原型
  // });
}

let animal = new Animal("猴子");
// animal.PI = 3.15;

function before(target, property, descriptor) {
  let oldSay = descriptor.value;
  descriptor.value = function () {
    console.log("before");
    oldSay.call(target, ...arguments);
  };
}

animal.say(1, 2, 3);
