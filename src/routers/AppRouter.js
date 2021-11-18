import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import LoginScreen from "../components/LoginScreen.js";
import DashboardRoutes from "./DashboardRoutes";
import { authenticationReducer } from "../reducers/authenticationReducer";
import RegisterScreen from "../components/RegisterScreen";
const AppRouter = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  };
  const [user, dispatch] = useReducer(authenticationReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthenticationContext.Provider value={{ user, dispatch }}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route path="/" component={DashboardRoutes} />
          </Switch>
        </div>
      </Router>
    </AuthenticationContext.Provider>
  );
};
export default AppRouter;
