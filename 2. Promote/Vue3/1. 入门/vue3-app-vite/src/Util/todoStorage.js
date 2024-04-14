/*
 * @Author: Astray
 * @Date: 2023-09-21 16:01:06
 */
const LOCAL_KEY = "todomvc";
/**
 * @description: 生成一个任务唯一编号: 时间戳+4位we'ji'ji'su
 * @return {*}
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substr(2, 4);
}

/**
 * @description: 获取所有任务
 * @return {*}
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 * @description:保存所有任务
 * @param {*} todos
 * @return {*}
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function filter(todos, visibility = "all") {
  if (visibility === "all") {
    return todos;
  } else if (visibility === "active") {
    return todos.filter((todo) => !todo.completed);
  } else {
    return todos.filter((todo) => todo.completed);
  }

  throw new Error("invalid visibility value");
}
