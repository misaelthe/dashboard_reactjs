import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import { Home, Gif, EventNote } from "@material-ui/icons";
const NavBar = () => {
  return (
    <div id="navBar">
      <div>
        <h3 className="header">Menu</h3>
        <div>
          <div className="containerItem">
            <div className="imgItemNavBar">
              <Home style={{ fontSize: 25 }} />
            </div>
            <Link className="linkNavBar" to="/home" color="primary">
              Home
            </Link>
          </div>
          <div className="containerItem">
            <div className="imgItemNavBar">
              <Gif style={{ fontSize: 25 }} />
            </div>
            <Link className="linkNavBar" to="/japanese">
              Japanese
            </Link>
          </div>{" "}
          <div className="containerItem">
            <div className="imgItemNavBar">
              <Gif style={{ fontSize: 25 }} />
            </div>
            <Link className="linkNavBar" to="/japanese/search">
              Search
            </Link>
          </div>
          <div className="containerItem">
            <div className="imgItemNavBar">
              <EventNote style={{ fontSize: 25 }} />
            </div>
            <Link className="linkNavBar" to="/inform">
              Inform
            </Link>
          </div>
          <div className="containerItem">
            <div className="imgItemNavBar">
              <Gif style={{ fontSize: 25 }} />
            </div>
            <Link className="linkNavBar" to="/gifviewer">
              GIF Viewer
            </Link>
          </div>
          <div>
            <div>
              <img />
            </div>
            <h5 className="itemNavBar">Others</h5>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h3 className="header">Category</h3>
      </div>
    </div>
  );
};
export default NavBar;
