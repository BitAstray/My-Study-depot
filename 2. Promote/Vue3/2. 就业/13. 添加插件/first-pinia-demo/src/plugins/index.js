/*
 * @Author: Astray
 * @Date: 2023-09-27 15:48:00
 */

function deepClone(obj) {
  if (typeof obj !== "object") return obj;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }

  return newObj;
}

// 插件
export function myPiniaPlugin1() {
  return {
    secret: "the cake is a lie",
  };
}

export function myPiniaPlugin2(context) {
  const { store } = context;
  store.test = "test";
}

/**
 * @description: 给特定仓库扩展
 * @param {*} store
 * @return {*}
 */
export function myPiniaPlugin3({ store }) {
  if (store.$id === "counter") {
    return {
      name: "counter",
    };
  }
}

/**
 * @description: 重置仓库状态
 * @param {*} context
 * @return {*}
 */
export function myPiniaPlugin4({ store }) {
  // 拷贝初始状态
  const state = deepClone(store.$state);
  store.reset = () => {
    store.$patch(deepClone(state));
  };
}
