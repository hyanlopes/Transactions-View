import { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services";
import { useLoader } from "../loadings";
export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [result, setResult] = useState();
  const { disassemble, update } = useLoader();
  const requestFunc = (data) => {
    api
      .post("", data)
      .then((res) => {
        setResult(res.data);
        setTimeout(() => toast.success("Resposta obtida com sucesso"), 800);
      })
      .catch((err) => {
        update();
        disassemble(err.response.data.message);
        setResult(err.response.data.message);
      });
  };

  const resetResult = () => {
    setResult("");
    disassemble();
  };

  return (
    <RequestContext.Provider value={{ result, requestFunc, resetResult }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
