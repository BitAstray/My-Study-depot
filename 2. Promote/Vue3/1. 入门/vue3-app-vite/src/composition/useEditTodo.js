/*
 * @Author: Astray
 * @Date: 2023-09-22 11:58:45
 */
import { ref, computed } from "vue";
export default function useEditTodo(todosRef) {
  const editingTodoRef = ref(null);
  let originTitle = null; //缓存之前的title值
  const editTodo = (todo) => {
    editingTodoRef.value = todo;
    originTitle = todo.title;
  };
  const doneEdit = (todo) => {
    editingTodoRef.value = null;
    const title = todo.title.trim();
    if (title) {
      todo.title = title;
    } else {
      todosRef.value.splice(todosRef.value.indexOf(todo), 1);
    }
  };
  const cancelEdit = (todo) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
    originTitle = null;
  };
  const allDoneRef = computed({
    get() {
      return todosRef.value.filter((todo) => !todo.completed).length === 0;
    },
  });

  function setAllChecked(checked) {
    todosRef.value.forEach((todo) => (todo.completed = checked));
  }

  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef,
    setAllChecked,
  };
}
