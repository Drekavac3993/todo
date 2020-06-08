import { TodoActionTypes } from "./types";

const initialState = { isLoading: false, data: [] };

const todos = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case TodoActionTypes.CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }

    case TodoActionTypes.REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }

    case TodoActionTypes.COMPLETED_TODO: {
      const { todo: updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      };
    }

    case TodoActionTypes.LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }

    case TodoActionTypes.LOAD_TODOS_START:
      return { ...state, isLoading: true };

    case TodoActionTypes.LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default todos;
