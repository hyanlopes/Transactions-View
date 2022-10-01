import Form from "../../components/form";
import Response from "../../components/response";
import { Container, Content } from "./style.jsx";
const Dashboard = () => {
  return (
    <Container>
      <Content>
        <Form />
        <Response />
      </Content>
    </Container>
  );
};
export default Dashboard;
