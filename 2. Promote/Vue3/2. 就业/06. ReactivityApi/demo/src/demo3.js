/*
 * @Author: Astray
 * @Date: 2023-09-23 20:53:57
 */
import { reactive, readonly } from "vue";
function useDebounce(obj, duration) {
  // 在这里补全函数
  const valueRef = reactive(obj);
  const value = readonly(valueRef);

  let timer = null;
  const setValue = (newObj) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      Object.entries(newObj).forEach(([key, value]) => {
        valueRef[key] = value;
      });
    }, duration);
  };

  return {
    value, // 这里是一个只读对象，响应式数据，默认值为参数值
    setValue, // 这里是一个函数，传入一个新的对象，需要把新对象中的属性混合到原始对象中，混合操作需要在duration的时间中防抖
  };
}
