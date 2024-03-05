/*
 * @Author: BitCreate
 * @Date: 2024-03-04 16:17:51
 */

//* es7 语法转换为es5
class Animal {
  static flag = "哺乳类";
  constructor(name) {
    this.name = name;
    this.eat = "吃";
  }
  say() {
    console.log("说话");
  }
}

//* babel-cli 默认包 模块 都不安装到全局上
//* 安装本地模块 保证版本一致
//* npm init -y
//* npm install @babel/cli --dev
//* --div 开发环境
//* npx node 5.2 版本以上提供 帮我们执行.bin目录下的文件

//* babel的核心包 语法转换的核心
//* npm install @babel/core --dev

//* babel-preset-es2015 转换es6语法
//* babel-preset-stage-0 未定案的语法

//* npm install @babel/preset-env --dev
//* npm i @babel/plugin-proposal-class-properties --dev

//* babel的配置中 一般配两个 配置插件 预设(插件的集合)
