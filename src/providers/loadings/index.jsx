import { useContext, useState } from "react";
import { createContext } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const update = () => {
    setLoading(true);
  };

  const disassemble = (result) => {
    setTimeout(
      () => {
        setLoading(false);
      },
      result == "Timeout" || result === "Internal Server Error" ? 4000 : 700
    );
  };

  return (
    <LoaderContext.Provider value={{ loading, update, disassemble }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
