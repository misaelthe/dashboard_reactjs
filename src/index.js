import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import GIFViewer from "./components/gifviewer/GIFViewer";
import "./css/index.css";
const index = (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/home">
        <GIFViewer />
      </Route>
      <Route path="/gifviewer">
        <GIFViewer />
      </Route>
    </Switch>
  </Router>
);
const root = document.querySelector("#root");
ReactDOM.render(index, root);
//ReactDOM.render(<CounterApp valsito={8} />, root);
