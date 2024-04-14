/*
 * @Author: Astray
 * @Date: 2023-09-16 21:25:41
 */
this.onmessage = function (e) {
  var result = 0;
  for (var i = 0; i < e.data.num; i++) {
    result += i;
  }
  this.postMessage(result);
};
