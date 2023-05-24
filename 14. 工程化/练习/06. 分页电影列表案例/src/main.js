/*
 * @Author: Astray
 * @Date: 2023-05-22 21:45:16
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-24 16:55:25
 * @FilePath: \Code\14. 工程化\练习\06. 分页电影列表案例\src\main.js
 */
import "./cover"; //静态依赖，表示该模块需要合并到主打包结果中
import "./global.less";
import("./movie"); //动态依赖，表示该模块可以动态加载，最终结果会导致该模块形成独立的包
