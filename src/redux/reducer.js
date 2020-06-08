import { TodoActionTypes } from "./types";

const todoReducer = (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
    case TodoActionTypes.CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };

      return state.concat(newTodo);
    }

    case TodoActionTypes.REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    case TodoActionTypes.COMPLETED_TODO: {
      const { text } = payload;
      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: true } : todo
      );
    }

    default:
      return state;
  }
};

export default todoReducer;
