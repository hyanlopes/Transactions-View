import { RequestProvider } from "./requests";
const Providers = ({ children }) => {
  return <RequestProvider>{children}</RequestProvider>;
};
export default Providers;
