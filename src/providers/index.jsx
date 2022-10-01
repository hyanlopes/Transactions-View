import { LoaderProvider } from "./loadings";
import { RequestProvider } from "./requests";
const Providers = ({ children }) => {
  return (
    <RequestProvider>
      <LoaderProvider>{children}</LoaderProvider>
    </RequestProvider>
  );
};
export default Providers;
