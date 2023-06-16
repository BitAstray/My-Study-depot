/*
 * @Author: Astray
 * @Date: 2023-05-30 21:17:33
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-01 20:01:52
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\mock\banner.js
 */
import Mock from "mockjs";

Mock.mock("/api/banners", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
