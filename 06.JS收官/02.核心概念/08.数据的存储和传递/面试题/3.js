// 下面的代码输出什么（字节）？
var foo = { bar: 1 };
var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1);
arr2[0]++;
// arr2 === [3, foo]
arr2[1].bar++;
// foo === {bar : 2}
foo.bar++;
// foo === {bar : 3}
arr1[2].bar++;
// foo === {bar : 4}
console.log(arr1[1] === arr2[0]);
// false
console.log(arr1[2] === arr2[1]);
// true
console.log(foo.bar);
// 4
