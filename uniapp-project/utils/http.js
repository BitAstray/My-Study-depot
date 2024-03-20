export default ({ name, data = {} }) => {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 打开Loading弹窗
    uni.showLoading({});
    // 调用云函数
    uniCloud.callFunction({
      name: name,
      data: data,
      success: ({ result }) => {
        if (result.code === 0) {
          // 请求成功
          resolve(result.data);
        } else {
          // 后端无数据提示
          uni.showToast({
            title: result.msg,
            icon: "none",
            mask: true,
          });
        }
      },
      fail: (error) => {
        // 请求失败
        reject(error);
      },
      complete() {
        // 请求完成后关闭Loading弹窗
        uni.hideLoading();
      },
    });
  });
};
