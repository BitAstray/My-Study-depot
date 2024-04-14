<!--
 * @Author: Astray
 * @Date: 2023-09-21 15:07:32
-->
<!--
 * @Author: Astray
 * @Date: 2023-09-20 19:48:50
-->
<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todosRef.length > 0">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          :checked="allDoneRef"
          @input="setAllChecked($event.target.checked)"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: todo.completed,
              editing: todo === editingTodoRef,
            }"
            v-for="todo in filteredTodosRef"
            :key="todo.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.escape="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{ remainingTodosRef }}</strong>
          <span>item{{ remainingTodosRef === 1 ? "" : "s" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all' }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button
          class="clear-completed"
          v-show="completedTodosRef"
          @click="removeCompletedAll"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilter from "./composition/useFilter";
import useEditTodo from "./composition/useEditTodo";
import useRemove from "./composition/useRemove";

export default {
  setup() {
    const { todosRef } = useTodoList();
    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEditTodo(todosRef),
      ...useRemove(todosRef),
    };
  },
};
</script>
