import styled from "styled-components";

const TodoFormContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const TodoInput = styled.input`
  height: 40px;
  font-size: 20px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #222;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  border: 1px solid #222;
  background-color: transparent;
  height: 40px;
`;

export { TodoFormContainer, TodoInput, TodoButton };
