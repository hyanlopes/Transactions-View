import { FormStyled } from "./style";
const Form = () => {
  return (
    <FormStyled action="">
      <h2>Simule sua Antecipação</h2>
      <div>
        <p>Inform o valor da venda *</p>
        <input type="text" />
      </div>
      <div>
        <p>Em quantas parcelas *</p>
        <input type="number" max={24} min={1} />
      </div>
      <div>
        <p>Informe o percentual de MDR *</p>
        <input type="text" />
      </div>
    </FormStyled>
  );
};
export default Form;
