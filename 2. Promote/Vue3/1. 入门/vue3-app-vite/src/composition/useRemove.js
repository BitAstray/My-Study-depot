export default function useRemove(todosRef) {
  const remove = (todo) => {
    todosRef.value.splice(todosRef.value.indexOf(todo), 1);
  };
  const removeCompletedAll = () => {
    todosRef.value = todosRef.value.filter((todo) => !todo.completed);
  };

  return {
    remove,
    removeCompletedAll,
  };
}
