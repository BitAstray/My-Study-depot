/*
 * @Author: BitCreate
 * @Date: 2024-03-05 20:37:44
 */
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js", //那个文件作为打包入口
  output: {
    file: "dist/umd/vue.js", //出口文件
    name: "Vue", //指定打包后全局变量的名字
    format: "umd", //统一模块规范
    sourcemap: true, //es6->es5 开启源码调试 可以找到源代码的报错位置
  },
  plugins: [
    babel({
      exclude: "node_modules/**", //排除node_modules文件夹
    }),
    process.env.ENV === "development"
      ? serve({
          open: true,
          openPage: "/public/index.html", //默认打开html的路径
          port: 3000,
          contentBase: "", //指定服务器根目录
        })
      : null,
  ],
};
