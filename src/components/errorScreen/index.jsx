import { useRequest } from "../../providers/requests";
import { ErrorStyled } from "./style.jsx";
const ErrorScreen = (err) => {
  const { resetResult } = useRequest();
  console.log(err);
  return (
    <ErrorStyled>
      {err.err == "Timeout" && <p>Tempo expirado</p>}
      {err.err == "Internal Server Error" && <p>Problemas internos</p>}
      <button onClick={() => resetResult()}>Tente novamente</button>
    </ErrorStyled>
  );
};
export default ErrorScreen;
