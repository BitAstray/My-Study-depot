/*
 * @Author: BitCreate
 * @Date: 2024-03-04 20:17:17
 */
//? 什么是高阶函数
//* 1) 如果函数的参数是一个函数(回调函数)
//* 2) 如果一个函数返回一个函数(链式调用)

//? 高阶函数的应用场景: 为写promise作铺垫

//* 写了一个业务代码，扩展当前的业务代码

function say(a, b) {
  // todo...
  console.log("say", a, b);
}

//* 给某个方法添加一个方法在他执行之前调用
Function.prototype.before = function (callback) {
  return (...args) => {
    //箭头函数没有this 也米有arguments
    callback();
    this(...args);
  };
};

let beforeSay = say.before(() => {
  console.log("before say");
});
beforeSay("hello", "world");
