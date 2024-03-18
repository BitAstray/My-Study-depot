/*
 * @Author: BitCreate
 * @Date: 2023-03-15 14:19:58
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-15 14:49:50
 * @FilePath: \JS收官\03.标准库\19.数组\练习题\2.js
 */
// 删除数组中的所有字符串
var nums = [1, 1, "1", "a", "b", "a", 3, 5, 3, 7];

// nums.splice(2, 4);
// console.log(nums);

for (var i = 0; i < nums.length; i++) {
  if (typeof nums[i] === "string") {
    nums.splice(i--, 1);
  }
}
console.log(nums);
