import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./style/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
      <ToastContainer />
    </>
  );
}

export default App;
