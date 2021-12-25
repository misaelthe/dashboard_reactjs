import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
const DashboardReact = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default DashboardReact;
