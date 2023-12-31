var expose = (function () {
  var a = 1;
  var b = 2;

  var a = 1; // 避免污染
  var b = 2; // 避免污染

  // 暴露为：sayHi
  function hello() {
    console.log("hello world");
  }
  // 暴露为：count
  var count = 1;

  return {
    sayHi: hello,
    count: count,
  };
})();
