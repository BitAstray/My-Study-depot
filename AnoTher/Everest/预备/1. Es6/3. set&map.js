/*
 * @Author: BitCreate
 * @Date: 2024-03-03 14:26:10
 */
//* set / map 是两种存储结构

//* set 集合 不能有重复的元素
// let s = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]);
// s.add(10);
// s.delete(10);

// promise symbol.iterator
// let arr = [...s];a
// console.log(arr);

// let s1 = new Set([1, 2, 3]);
// let s2 = new Set([3, 4, 5]);

//* 并集 交集 差集
// function union(s1, s2) {
//   console.log([...new Set([...s1, ...s2])]);
// }
// union(s1, s2);

// function intersection(s1, s2) {
//   console.log([...new Set([...s1].filter((item) => s2.has(item)))]);
// }
// intersection(s1, s2);

// function difference(s1, s2) {
//   console.log([...new Set([...s1].filter((item) => !s2.has(item)))]);
// }
// difference(s1, s2);
// difference(s2, s1);

//* map 是键值对的集合

let m = new WeakMap(); //weakmap的key只能是对象
// m.set("name", "zhangsan");
// m.set("name", 123);
let obj = { name: 1 };
m.set(obj, "456");
// obj = null;
console.log(m);
