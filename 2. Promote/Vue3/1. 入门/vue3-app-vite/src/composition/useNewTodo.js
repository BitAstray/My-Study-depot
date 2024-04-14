/*
 * @Author: Astray
 * @Date: 2023-09-21 17:20:17
 */
import { ref } from "vue";
import { generateId } from "../Util/todoStorage";
export default function useNewTodo(todosRef) {
  const newTodoRef = ref(""); //新任务标题
  const addTodo = () => {
    // 新增一个任务
    const value = newTodoRef.value && newTodoRef.value.trim();
    if (!value) return;
    // 生成一个任务对象，将其加入到任务列表中
    const todo = {
      id: generateId(),
      title: value,
      completed: false,
    };
    todosRef.value.push(todo);
    newTodoRef.value = "";
  };

  return {
    newTodoRef,
    addTodo,
  };
}
