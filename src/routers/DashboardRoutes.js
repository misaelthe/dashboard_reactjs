import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GIFScreen from "../components/gifviewer/GIFScreen";
import HomeScreen from "../components/home/HomeScreen";
import NavBar from "../ui/NavBar";
import "../css/dashboard.css";
import JapaneseScreen from "../components/japanese/JapaneseScreen";

const DashboardRoutes = () => {
  return (
    <div id="dashboard">
      <NavBar />
      <Switch>
        <Route path="/home" component={HomeScreen} />
        <Route exact path="/japanese" component={JapaneseScreen} />
        {/* <Route
          exact
          path="/anime/:type/:mal_id"
          component={AnimeDetailsScreen}
        /> */}
        <Route path="/gifviewer" component={GIFScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </div>
  );
};
export default DashboardRoutes;
