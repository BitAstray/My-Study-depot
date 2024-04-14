/*
 * @Author: Astray
 * @Date: 2023-09-23 20:50:39
 */
import { reactive, readonly } from "vue";
function useUser() {
  // 在这里补全函数
  const userRef = reactive({});
  const user = readonly(userRef);
  const setUserName = (name) => {
    userRef.name = name;
  };
  const setUserAge = (age) => {
    userRef.age = age;
  };
  return {
    user, // 这是一个只读的用户对象，响应式数据，默认为一个空对象
    setUserName, // 这是一个函数，传入用户姓名，用于修改用户的名称
    setUserAge, // 这是一个函数，传入用户年龄，用户修改用户的年龄
  };
}
