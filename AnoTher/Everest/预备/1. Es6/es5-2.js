"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _class, _descriptor;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
/*
 * @Author: BitCreate
 * @Date: 2024-03-04 19:34:32
 */
//* 装饰器可以修饰类 类的属性 类的原型上的方法
//* 修饰的时候 就是把类 属性 传递给修饰的函数
// @flag
var Animal = (_class = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    _initializerDefineProperty(this, "PI", _descriptor, this);
    this.name = name;
    this.eat = "吃";
  }
  _createClass(Animal, [{
    key: "say",
    value: function say(a, b, c) {
      console.log("说话", a, b, c, this);
    }
  }]);
  return Animal;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.14;
  }
}), _applyDecoratedDescriptor(_class.prototype, "say", [before], Object.getOwnPropertyDescriptor(_class.prototype, "say"), _class.prototype)), _class); //* 1) 类的静态属性
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
var animal = new Animal("猴子");
// animal.PI = 3.15;

function before(target, property, descriptor) {
  var oldSay = descriptor.value;
  descriptor.value = function () {
    console.log("before");
    oldSay.call.apply(oldSay, [target].concat(Array.prototype.slice.call(arguments)));
  };
}
animal.say(1, 2, 3);
