import styled from "styled-components";
export const Container = styled.div`
  background: rgba(209, 220, 227, 0.18);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  h2 {
    font-size: 16px;
    color: hsla(214, 51%, 49%, 1);
    border-bottom: 1px solid hsla(214, 79%, 65%, 1);
    width: 70%;
  }
  .result-days {
    margin: 20px auto;
    color: hsla(214, 79%, 65%, 1);
  }
  .result-days__value {
    font-weight: bold;
  }
  @media (min-width: 510px) {
    width: 40%;
    height: 100%;
    margin-top: 0;
  }
`;
