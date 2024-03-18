// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */
function factorial(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 利用上面的函数，完成下面的练习题

/* 
1. 输出5的阶乘
*/
console.log(factorial(5));
/* 
2. 求5和6的阶乘之和，然后输出
*/
console.log(factorial(6) + factorial(5));
/* 
3. 输出阶乘结果不超过1000的所有数字
*/
var i = 0;
while (factorial(i) <= 1000) {
  console.log(i);
  i++;
}
