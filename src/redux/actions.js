import { TodoActionTypes } from "./types";

const createTodo = (text) => ({
  type: TodoActionTypes.CREATE_TODO,
  payload: { text },
});

const removeTodo = (text) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: { text },
});

const completedTodo = (text) => ({
  type: TodoActionTypes.COMPLETED_TODO,
  payload: { text },
});

export { createTodo, removeTodo, completedTodo };
