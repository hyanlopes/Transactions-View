import { FormStyled } from "./style";
const Form = () => {
  return (
    <FormStyled action="">
      <h2>Simule sua Antecipação</h2>
      <div className="form-input">
        <p className="form-input__title">Informe o valor da venda *</p>
        <input className="form-input__input" type="text" />
      </div>
      <div className="form-input">
        <p className="form-input__title">Em quantas parcelas *</p>
        <input className="form-input__input" type="number" max={12} min={1} />
        <p className="form-input__alert">Máximo de 12 parcelas</p>
      </div>
      <div className="form-input">
        <p className="form-input__title">Informe o percentual de MDR *</p>
        <input className="form-input__input" type="text" />
      </div>
    </FormStyled>
  );
};
export default Form;
