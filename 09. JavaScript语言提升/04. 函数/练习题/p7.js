/**
 * 函数防抖：让某个函数的执行推迟，如果在推迟期间执行函数，会将函数进一步推迟
 */

// 根据下面的调用方式，编写debounce函数
/**
 * @description: 函数防抖
 * @param {Function} fn
 * @param {Number} duration
 * @return {Function}
 */
function debounce(fn, duration = 1000) {
  let timerID;
  return (...args) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}

const fn = (a, b) => {
  console.log(a + b);
};

const dFn = debounce(fn, 1000); // 产生一个防抖函数，延迟1000毫秒执行fn
dFn(1, 2); // 延迟输出：3
dFn(2, 3); // 延迟输出：5

// 最终，1秒后输出：5
