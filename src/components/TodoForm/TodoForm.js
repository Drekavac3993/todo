import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "../../redux/selectors";
import { addTodoRequest } from "../../redux/thunks";
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
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePress: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
