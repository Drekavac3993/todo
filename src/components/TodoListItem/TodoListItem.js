import React from "react";
import {
  TodoItemContainer,
  TodoItemTitle,
  ButtonsContainer,
  CompletedButton,
  RemoveButton,
} from "./TodoListItem.styles";

const TodoListItem = ({ todo, onRemovePress, onCompletedPress }) => (
  <TodoItemContainer>
    <TodoItemTitle>{todo.text}</TodoItemTitle>
    <ButtonsContainer>
      {todo.isCompleted ? null : (
        <CompletedButton onClick={() => onCompletedPress(todo.id)}>
          Mark As Completed
        </CompletedButton>
      )}
      <RemoveButton onClick={() => onRemovePress(todo.id)}>Remove</RemoveButton>
    </ButtonsContainer>
  </TodoItemContainer>
);

export default TodoListItem;
