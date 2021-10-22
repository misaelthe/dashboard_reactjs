import React from "react";
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

export const Prueba = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={HomePrueba} />
          <Route path="/destiny" component={CasaPrueba} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
};

const HomePrueba = () => {
  return (
    <div>
      <h1>homepuerbea</h1>
      <NavLink activeClassName="active" to="home">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="destiny">
        Homecasa
      </NavLink>
    </div>
  );
};
const CasaPrueba = () => {
  return (
    <div>
      <h1>r u serious about thjis</h1>
      <Link to="destiny">Homecasa</Link>
    </div>
  );
};
