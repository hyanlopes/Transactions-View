import { LoaderProvider } from "./loadings";
import { RequestProvider } from "./requests";
const Providers = ({ children }) => {
  return (
    <LoaderProvider>
      <RequestProvider>{children}</RequestProvider>
    </LoaderProvider>
  );
};
export default Providers;
