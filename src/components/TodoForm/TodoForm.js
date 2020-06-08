import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../redux/actions";
import "./TodoForm.css";

const TodoForm = ({ todos, onCreatePress }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Type new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePress(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePress: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
