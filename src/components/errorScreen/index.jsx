import { useRequest } from "../../providers/requests";
import { ErrorStyled } from "./style.jsx";
const ErrorScreen = (err) => {
  const { resetResult } = useRequest();
  return (
    <ErrorStyled>
      {err.err == "Timeout" && <p>Tempo expirado</p>}
      <button onClick={() => resetResult()}>Tente novamente</button>
    </ErrorStyled>
  );
};
export default ErrorScreen;
