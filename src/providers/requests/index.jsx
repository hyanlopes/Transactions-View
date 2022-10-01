import { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services";
export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [result, setResult] = useState();
  const requestFunc = (data) => {
    api.post("", data).then((res) => {
      setResult(res.data);
      toast.success("Resultado obtido com sucesso!");
    });
  };
  return (
    <RequestContext.Provider value={{ result, requestFunc }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
