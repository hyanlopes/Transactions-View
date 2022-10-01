import { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const update = () => {
    setLoading(true);
  };

  const disassemble = () => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <LoaderContext.Provider value={{ loading, update, disassemble }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
