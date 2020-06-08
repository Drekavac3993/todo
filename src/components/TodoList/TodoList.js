import React, { useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { connect } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../../redux/thunks";
import "./TodoList.css";

const TodoList = ({
  todos = [],
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
    <div className="list-wrapper">
      <TodoForm />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text + Date.now()}
          todo={todo}
          onCompletedPress={onCompletedPress}
          onRemovePress={onRemovePress}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePress: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPress: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
