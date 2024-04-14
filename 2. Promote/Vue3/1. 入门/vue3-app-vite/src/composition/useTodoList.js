import { ref, watchEffect } from "vue";
import * as todoStorage from "../Util/todoStorage";

export default function useTodoLost() {
  const todosRef = ref(todoStorage.fetch());
  watchEffect(() => {
    todoStorage.save(todosRef.value);
  });

  return {
    todosRef,
  };
}
