import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./style";
const Form = () => {
  const FormSchema = yup.object().shape({
    email: yup.string().email("Invalid format").required("Required field"),
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const OnSubmitForm = (data) => {
    userLogin(data);
  };
  return (
    <FormStyled onSubmit={handleSubmit(OnSubmitForm)}>
      <h2>Simule sua Antecipação</h2>
      <div className="form-input">
        <p className="form-input__title">Informe o valor da venda *</p>
        <input
          className="form-input__input"
          type="text"
          {...register("amount")}
        />
      </div>
      <div className="form-input">
        <p className="form-input__title">Em quantas parcelas *</p>
        <input
          className="form-input__input"
          type="number"
          max={12}
          min={1}
          {...register("installments")}
        />
        <p className="form-input__alert">Máximo de 12 parcelas</p>
      </div>
      <div className="form-input">
        <p className="form-input__title">Informe o percentual de MDR *</p>
        <input className="form-input__input" type="text" {...register("mdr")} />
      </div>
    </FormStyled>
  );
};
export default Form;
