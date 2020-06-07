import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos = [{ text: "hello wordl" }] }) => (
  <div className="list-wrapper">
    <TodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
