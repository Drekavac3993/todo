import { TodoActionTypes } from "./types";

const createTodo = (todo) => ({
  type: TodoActionTypes.CREATE_TODO,
  payload: { todo },
});

const removeTodo = (todo) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: { todo },
});

const completedTodo = (todo) => ({
  type: TodoActionTypes.COMPLETED_TODO,
  payload: { todo },
});

const loadTodosStart = () => ({
  type: TodoActionTypes.LOAD_TODOS_START,
});

const loadTodosSuccess = (todos) => ({
  type: TodoActionTypes.LOAD_TODOS_SUCCESS,
  payload: { todos },
});

const loadTodosFailure = () => ({
  type: TodoActionTypes.LOAD_TODOS_FAILURE,
});

export {
  createTodo,
  removeTodo,
  completedTodo,
  loadTodosStart,
  loadTodosSuccess,
  loadTodosFailure,
};
