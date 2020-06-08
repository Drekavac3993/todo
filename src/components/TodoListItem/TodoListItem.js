import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePress, onCompletedPress }) => (
  <div className="todo-item-container">
    <h1 className="todo-item-title">{todo.text}</h1>
    <div className="buttons-container">
      {todo.isCompleted ? null : (
        <button
          className="completed-button"
          onClick={() => onCompletedPress(todo.id)}
        >
          Mark As Completed
        </button>
      )}
      <button className="remove-button" onClick={() => onRemovePress(todo.id)}>
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
