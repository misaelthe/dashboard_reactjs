import React from "react";
import ReactDOM from "react-dom";
import { Prueba } from "./components/login/prueba";
import AppRouter from "./routers/AppRouter";
import { Padre } from "./ui/Padre";
//ReactDOM.render(<Prueba />, document.getElementById("root"));
ReactDOM.render(<AppRouter />, document.getElementById("root"));
