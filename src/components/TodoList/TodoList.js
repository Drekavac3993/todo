import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import { connect } from "react-redux";
import { removeTodo, completedTodo } from "../../redux/actions";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePress, onCompletedPress }) => (
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

const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePress: (text) => dispatch(removeTodo(text)),
  onCompletedPress: (text) => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
