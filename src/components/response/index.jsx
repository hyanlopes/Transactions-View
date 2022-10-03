import { Container } from "./style";
import { useRequest } from "../../providers/requests";
import { useEffect } from "react";
import Loader from "../loader";
import { useLoader } from "../../providers/loadings";
import ErrorScreen from "../errorScreen";
const Response = () => {
  const { result } = useRequest();
  const { loading, update, disassemble } = useLoader();
  useEffect(() => {
    update();
    return () => {
      disassemble(result);
    };
  }, [result]);

  return (
    <Container>
      {loading === true ? (
        <Loader />
      ) : result === "Timeout" || result === "Internal Server Error" ? (
        <ErrorScreen err={result} />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};
export default Response;
