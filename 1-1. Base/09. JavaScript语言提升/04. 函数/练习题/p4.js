/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-18 23:15:47
 * @FilePath: \Code\09. JavaScript语言提升\04. 函数\练习题\p4.js
 */
// 根据下面的调用示例，完成函数 getDatas
const getDatas = (page = 1, items = 10) => {
  console.log(`获取第${page}页的数据，每页显示${items}条`);
};

getDatas(); // 输出：获取第1页的数据，每页显示10条
getDatas(2); // 输出：获取第2页的数据，每页显示10条
getDatas(2, 30); // 输出：获取第2页的数据，每页显示30条
