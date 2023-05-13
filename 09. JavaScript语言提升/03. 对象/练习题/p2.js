const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
Object.keys(obj).forEach(function (key) {
  console.log(key);
});

// 遍历对象的所有属性值
const arr = Object.values(obj);
for (const item of arr) {
  console.log(item);
}

// 遍历对象的所有属性名和属性值
for (const key in obj) {
  console.log(key + ":" + obj[key]);
}

// 复制obj的所有属性到一个新的对象
const newObj = Object.fromEntries(Object.entries(obj));
console.log(newObj);

// 复制obj除a以外的所有属性到一个新的对象
const { a, ...newObj2 } = obj;

console.log(newObj2);
