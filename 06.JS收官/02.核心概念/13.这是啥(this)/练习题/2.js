// 为所有对象添加方法print，打印对象的键值对

var obj = {
  name: "zhangsan",
  age: 18,
};

var obj2 = {
  name: "lisi",
  age: 25,
};

Object.prototype.print = function () {
  // console.log(this);
  for (var key in obj) {
    //? key in Object ---> 判断 key 是否在对象自身极其隐式原型上
    // 判断这个属性是否属于对象本身，而不是在隐式原型上
    if (obj.hasOwnProperty(key)) {
      console.log(key, this[key]);
    }
  }
};

obj.print();
obj2.print();
