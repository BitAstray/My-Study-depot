/*
 * @Author: BitCreate
 * @Date: 2024-03-04 15:59:28
 */
// class Animal {
//   static flag = 123; //? es7的静态属性
//   static flag2() {
//     //? es6的静态方法
//     return 123;
//   }
//   constructor(name) {
//     this.name = name;
//     this.eat = "吃";
//   }
//   say() {
//     //原型上的方法
//     console.log(this); //! 单独调用原型上的方法 this指向undefined
//   }
// }

//* 1)类不能被当作函数调用
// Animal();
// let animal = new Animal("猴子");
// animal.say();
// console.log(Animal.flag);

// class Tiger extends Animal {
//   //* 继承 ==> 实例 + 原型
//   constructor(name) {
//     super(name);
//   }
// }

// let tiger = new Tiger("老虎");
// tiger.say();
// console.log(tiger.eat);
// console.log(tiger.name);
// console.log(Tiger.flag2());
