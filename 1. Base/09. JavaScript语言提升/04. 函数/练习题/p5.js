/*
 * @Author: Astray
 * @Date: 2023-04-17 17:15:55
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-04-18 23:30:55
 * @FilePath: \Code\09. JavaScript语言提升\04. 函数\练习题\p5.js
 */
// 根据下面的调用示例，完成函数 getDatas

// const getDatas = (config = {}) => {
//   const page = config.page || 1;
//   const limit = config.limit || 10;
//   const keyword = config.keyword || "空";
//   console.log(
//     `获取第${page}页的数据，每页显示${limit}条，查询关键字为${keyword}`
//   );
// };

const getDatas = ({ page = 1, limit = 10, keyword = "空" } = {}) => {
  console.log(
    `获取第${page}页的数据，每页显示${limit}条，查询关键字为${keyword}`
  );
};

getDatas(); // 输出：获取第1页的数据，每页显示10条，查询关键字为空

getDatas({
  page: 2,
});
// 输出：获取第2页的数据，每页显示10条，查询关键字为空

getDatas({
  page: 2,
  limit: 30,
});
// 输出：获取第2页的数据，每页显示30条，查询关键字为空

getDatas({
  keyword: "js",
});
// 输出：获取第1页的数据，每页显示10条，查询关键字为js
