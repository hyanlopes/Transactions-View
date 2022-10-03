import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;
export const Content = styled.div`
  width: 90%;
  max-width: 608px;
  height: 389px;
  border-radius: 4px;
  background-color: var(--white);
  @media (min-width: 510px) {
    display: flex;
  }
`;
