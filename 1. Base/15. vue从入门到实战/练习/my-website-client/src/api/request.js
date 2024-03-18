/*
 * @Author: Astray
 * @Date: 2023-05-30 21:40:34
 */
import axios from "axios";
import { server_URL } from "@/urlConfig";
import { showMessage } from "@/utils";

const ins = axios.create(); //创建一个axios的实例
// 响应拦截
ins.interceptors.response.use(
  function (resp) {
    if (resp.data.code !== 0) {
      showMessage({
        content: JSON.parse(resp.data).msg,
        type: "error",
        duration: 1500,
      });
      return null;
    }
    // 为所有图片加上地址前缀
    // if (resp.data.data.length || resp.data.data.rows) {
    //   for (const result of resp.data.data.rows || resp.data.data) {
    //     if (result.midImg) result.midImg = server_URL + result.midImg;
    //     if (result.bigImg) result.bigImg = server_URL + result.bigImg;
    //     if (result.avatar) result.avatar = server_URL + result.avatar;
    //     if (result.thumb) result.thumb = server_URL + result.thumb;
    //   }
    // } else {
    //   const result = resp.data.data;
    //   if (result.thumb) result.thumb = server_URL + result.thumb;
    //   if (result.avatar) result.avatar = server_URL + result.avatar;
    //   if (result.qqQrCode) result.qqQrCode = server_URL + result.qqQrCode;
    //   if (result.weixinQrCode)
    //     result.weixinQrCode = server_URL + result.weixinQrCode;
    // }

    return resp.data.data;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default ins;
