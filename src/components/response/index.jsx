import { Container } from "./style";
import { useRequest } from "../../providers/requests";
const Response = () => {
  const { result } = useRequest();
  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <section className="result">
        <p className="result-days">
          Amanhã:{" "}
          <span className="result-days__value">
            R$ {result ? result["1"] : "0, 00"}
          </span>
        </p>
        <p className="result-days">
          Em 15 dias:{" "}
          <span className="result-days__value">
            {" "}
            R$ {result ? result["15"] : "0, 00"}
          </span>
        </p>
        <p className="result-days">
          Em 30 dias:{" "}
          <span className="result-days__value">
            {" "}
            R$ {result ? result["30"] : "0, 00"}
          </span>
        </p>
        <p className="result-days">
          Em 90 dias:{" "}
          <span className="result-days__value">
            {" "}
            R$ {result ? result["90"] : "0, 00"}
          </span>
        </p>
      </section>
    </Container>
  );
};
export default Response;
