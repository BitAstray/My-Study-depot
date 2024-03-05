/*
 * @Author: BitCreate
 * @Date: 2024-03-04 14:57:28
 */
//* es6 类 es5的构造函数的语法糖
//* 1) 了解构造函数的属性
// function Animal(name) {
//   // 属性 实例 共有属性
//   this.name = name;
//   this.arr = [1, 2, 3];
// }
// Animal.prototype.address = {
//   location: "山里",
// };

// let a1 = new Animal("猴子");
// let a2 = new Animal("小鸡");
// console.log(a1.arr === a2.arr);
// console.log(a1.address === a2.address);
// console.log(a1.__proto__.constructor === Animal);
// console.log(a1.constructor === Animal);

// console.log(Animal.__proto__ === Function.prototype);
// console.log(a1.__proto__.__proto__ === Object.prototype);
// console.log(object.__proto__ === null);

//* 2) 类的继承
// function Animal(name) {
//   this.name = name;
//   this.eat = "吃";
// }

// Animal.prototype.address = { location: "山里" };

// function Tiger(name) {
//   this.name = name;
//   Animal.call(this);
//   this.age = 10;
// }

// Tiger.prototype.say = function () {
//   console.log("说话");
// };
//* 继承父类的公共属性 / 方法
// Tiger.prototype.__proto__ = Animal.prototype;
// Tiger.prototype = Object.create(Animal.prototype);

//* 2.1) 继承父类实例上的属性
// let tiger = new Tiger("老虎");
// console.log(tiger.eat);
// console.log(tiger.address);
// console.log(tiger.constructor);

//* 常用 call + Object.create / call + setPrototypeOf
