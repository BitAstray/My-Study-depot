/*
 * @Author: BitCreate
 * @Date: 2024-03-04 13:24:48
 */
//* Object.defineProperty 不支持数组更新 push slice
//* 希望数组变化能够触发更新

function update() {
  console.log("update");
}

let arr = [1, 2, 3];
// proxy可以监控到数组的变化 和 对象的变化
//* 数组变化 会改变数组内容 还会改变数组长度
let proxy = new Proxy(arr, {
  set(target, key, value) {
    // 不要手动操作数组 数组变化时 可能调用push方法 这时候 key 会出现问题
    if (key === "length") return true;
    update();
    return Reflect.set(target, key, value);
  },
  get(target, key) {
    return Reflect.get(target, key);
  },
});

proxy.push(123);
proxy.pop();
console.log(proxy);
