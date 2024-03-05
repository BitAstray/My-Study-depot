"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/*
 * @Author: BitCreate
 * @Date: 2024-03-04 16:17:51
 */
//* es7 语法转换为es5
var Animal = /*#__PURE__*/ (function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
    this.eat = "吃";
  }
  _createClass(Animal, [
    {
      key: "say",
      value: function say() {
        console.log("说话");
      },
    },
  ]);
  return Animal;
})(); //* babel-cli 默认包 模块 都不安装到全局上
//* 安装本地模块 保证版本一致
//* npm init
//* npm install @babel/cli --dev
//* --div 开发环境
//* npx node 5.2 版本以上提供 帮我们执行.bin目录下的文件
//* babel的核心包 语法转换的核心
//* npm install @babel/core --dev
//* babel-preset-es2015 转换es6语法
//* babel-preset-stage-0 未定案的语法
//* npm install @babel/preset-env --dev
//* babel的配置中 一般配两个 配置插件 预设(插件的集合)
_defineProperty(Animal, "flag", "哺乳类");
