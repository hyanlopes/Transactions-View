import { useContext } from "react";
import { createContext } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  return <RequestContext.Provider></RequestContext.Provider>;
};

export const useRequest = () => useContext(RequestContext);
