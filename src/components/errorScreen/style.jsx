import styled from "styled-components";

export const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  p {
    color: red;
    font-weight: bold;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: var(--black);
    border-radius: 8px;
    color: white;
    font-weight: bolder;
    padding: 8px;
    transition: ease 0.4s;
  }
  button:hover {
    background-color: var(--white);
    color: var(--black);
    border: 2px solid var(--black);
  }
`;
