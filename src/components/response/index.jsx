import { Container } from "./style";

const Response = () => {
  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <section className="result">
        <p className="result-days">
          Amanhã: <span className="result-days__value">R$ 0,00</span>
        </p>
        <p className="result-days">
          Em 15 dias: <span className="result-days__value">R$ 0,00</span>
        </p>
        <p className="result-days">
          Em 30 dias: <span className="result-days__value">R$ 0,00</span>
        </p>
        <p className="result-days">
          Em 90 dias: <span className="result-days__value">R$ 0,00</span>
        </p>
      </section>
    </Container>
  );
};
export default Response;
