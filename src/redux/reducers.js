import { TodoActionTypes } from "./types";

const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case TodoActionTypes.LOAD_TODOS_START:
      return true;

    case TodoActionTypes.LOAD_TODOS_SUCCESS:
    case TodoActionTypes.LOAD_TODOS_FAILURE:
      return false;

    default:
      return state;
  }
};

const todoReducer = (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
    case TodoActionTypes.CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }

    case TodoActionTypes.REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }

    case TodoActionTypes.COMPLETED_TODO: {
      const { todo: updatedTodo } = payload;
      return state.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    }

    case TodoActionTypes.LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case TodoActionTypes.LOAD_TODOS_START:
    case TodoActionTypes.LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};

export { todoReducer, isLoading };
