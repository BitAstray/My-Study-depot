/*
 * @Author: Astray
 * @Date: 2023-06-14 21:16:57
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 22:18:42
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\mock\setting.js
 */
import Mock from "mockjs";
import qqQrCode from "@/assets/images/qq_qrcode.jpg";
import weixinQrCode from "@/assets/images/wx_qrcode.png";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://picx.zhimg.com/80/v2-585754b4ab4d49f480b833cbbbf4839f_720w.webp?source=1940ef5c",
    siteTitle: "BitCreate",
    github: "https://github.com/BitAstray",
    qq: "1669244371",
    qqQrCode,
    weixin: "yc444400",
    weixinQrCode,
    mail: "bitcreate@qq.com",
    icp: "鄂ICP备17001719号",
    githubName: "BitAstray",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
