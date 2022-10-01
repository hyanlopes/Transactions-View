import styled from "styled-components";

export const FormStyled = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    opacity: 0.7;
  }
  .form-input {
    width: 70%;
  }
  .form-input__title {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 7px;
  }
  .form-input__alert {
    opacity: 0.3;
    font-weight: bold;
    font-size: 11px;
  }
  .form-input__input {
    width: 100%;
    border: 1px solid hsla(194, 21%, 89%, 1);
    border-radius: 4px;
    height: 37px;
    padding-left: 10px;
  }
  .form-input__input:hover,
  .form-input__input:focus {
    border: 1px solid hsla(207, 75%, 66%, 1);
  }
  .form-input__error {
    color: red;
    opacity: 0.6;
    font-size: 14px;
  }
  @media (min-width: 510px) {
    width: 70%;
  }
`;
