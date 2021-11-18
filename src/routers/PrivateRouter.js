import { Route, Redirect } from "react-router-dom";
export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastPath", rest.location.path);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
