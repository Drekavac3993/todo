import React, { useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { connect } from "react-redux";
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from "../../redux/selectors";
import TodoListItem from "../TodoListItem/TodoListItem";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../../redux/thunks";
import { ListWrapper } from "./TodoList.styles";

const TodoList = ({
  completedTodos,
  incompletedTodos,
  isLoading,
  onRemovePress,
  onCompletedPress,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <ListWrapper>
      <TodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompletedPress={onCompletedPress}
          onRemovePress={onRemovePress}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompletedPress={onCompletedPress}
          onRemovePress={onRemovePress}
        />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePress: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPress: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
