import styled from "styled-components";

const TodoItemContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoItemTitle = styled.div`
  border: none;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  width: 100%;
  text-align: center;
  padding: 10px 0 10px 0;
`;

const ButtonsContainer = styled.div`
  width: 100%;
`;

const CompletedButton = styled.button`
  border-radius: 5px;
  border: 1px solid #222;
  background-color: transparent;
  height: 40px;
  width: 50%;
`;

const RemoveButton = styled.button`
  border-radius: 5px;
  border: 1px solid #222;
  background-color: transparent;
  height: 40px;
  width: 50%;
`;

export {
  TodoItemContainer,
  TodoItemTitle,
  ButtonsContainer,
  CompletedButton,
  RemoveButton,
};
