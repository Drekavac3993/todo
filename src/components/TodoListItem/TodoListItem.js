import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h1 className="todo-item-title">{todo.text}</h1>
    <div className="buttons-container">
      <button className="completed-button">Mark As Completed</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
