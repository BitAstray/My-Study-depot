Mock.mock("/api/cart", "get", {
  code: 0,
  msg: "",
  "data|5-20": [
    {
      productName: "@csentence(5, 12)",
      productUrl: "@image(125x125,#ffff00,#ff00ff,testImg)",
      "unitPrice|1-9999.2": 0,
      "count|1-10": 0,
    },
  ],
});

// {
//   "code": 0, // 无错误
//   "msg": "", // 错误消息
//   "data": [
//     // 主体数据
//     {
//       "productName": "iphone12", // 商品名称
//       "productUrl": "http://img.com/iphone12", // 商品图片url地址
//       "unitPrice": 8888, // 商品单价
//       "count": 3 // 购物数量
//     }
//   ]
// }
