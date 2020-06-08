import { createSelector } from "reselect";

const getTodos = (state) => state.todos.data;
const getTodosLoading = (state) => state.todos.isLoading;

const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

export { getTodosLoading, getTodos, getIncompleteTodos, getCompletedTodos };
