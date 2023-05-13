// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((res) => {
    console.log(res); // 1
    return new Error("2");
  })
  .catch((err) => {
    throw err; // Error("2")
    return 3;
  })
  .then((res) => {
    console.log(res); //未执行
  });
