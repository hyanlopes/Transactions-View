import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./style";
import { useRequest } from "../../providers/requests";
import { useLoader } from "../../providers/loadings";
const Form = () => {
  const { requestFunc } = useRequest();
  const { update } = useLoader();
  const FormSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Você deve escrever um número")
      .required("Campo obrigatório")
      .min("1000", "Venda deve ser maior ou igual a R$ 1000"),
    installments: yup.string().required("Campo obrigatório"),
    mdr: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  const OnSubmitForm = (data) => {
    update();
    requestFunc(data);
  };
  return (
    <FormStyled onSubmit={handleSubmit(OnSubmitForm)}>
      <h2>Simule sua Antecipação</h2>
      <div className="form-input">
        <p className="form-input__title">Informe o valor da venda *</p>
        <input
          className="form-input__input"
          type="number"
          {...register("amount")}
        />
        {errors.amount && (
          <p className="form-input__error">{errors.amount.message}</p>
        )}
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

        {errors.installments && (
          <p className="form-input__error">{errors.installments.message}</p>
        )}
      </div>
      <div className="form-input">
        <p className="form-input__title">Informe o percentual de MDR *</p>
        <input className="form-input__input" type="text" {...register("mdr")} />
        {errors.mdr && (
          <p className="form-input__error">{errors.mdr.message}</p>
        )}
      </div>

      <button type="submit">Enviar</button>
    </FormStyled>
  );
};
export default Form;
