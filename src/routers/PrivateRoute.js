import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log("priave " + isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
