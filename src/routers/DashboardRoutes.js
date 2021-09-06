import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GIFScreen from "../components/gifviewer/GIFScreen";
import HomeScreen from "../components/home/HomeScreen";
import AnimeScreen from "../components/anime/AnimeScreen";
import { AnimeDetailsScreen } from "../components/anime/AnimeDetailsScreen";
import NavBar from "../ui/NavBar";
import "../css/dashboard.css";

const DashboardRoutes = () => {
  return (
    <div id="dashboard">
      <NavBar />
      <Switch>
        <Route path="/home" component={HomeScreen} />
        <Route exact path="/anime" component={AnimeScreen} />
        <Route
          exact
          path="/anime/:type/:mal_id"
          component={AnimeDetailsScreen}
        />
        <Route path="/gifviewer" component={GIFScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </div>
  );
};
export default DashboardRoutes;
