import axios from "axios";

const ins = axios.create(); //创建一个axios的实例
// 响应拦截
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      comtent: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }

  return resp.data.data;
});

export default ins;
