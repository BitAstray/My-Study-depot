/*
 * @Author: Astray
 * @Date: 2023-06-15 17:08:59
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-15 17:14:53
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\mock\message.js
 */
import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
          ],
        },
      ],
    },
  });
});
