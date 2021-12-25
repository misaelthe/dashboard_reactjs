import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/LoginScreen.js";
import DashboardRoutes from "./DashboardRoutes";
import RegisterScreen from "../components/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "../actions/authenticationAction.js";
import { PrivateRoute } from "./PrivateRoute.js";
import ComponentTest from "../components/ComponentTest.js";
const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.authentication);
  const [logged, setLogged] = useState(false);
  console.log("el uid es " + uid + " " + logged);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLogged(true);
      }
      console.log("----" + user.displayName);
    });
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          {/* <PrivateRoute
            exact
            path="/"
            component={DashboardRoutes}
            isAuthenticated={logged}
          /> */}
          <Route exact path="/" component={ComponentTest} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
