import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/NavBar.css";

const NavBar = () => {
  return (
    <div id="navBar">
      <div>
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <div className="containerItem">
            <div>
              <img />
            </div>
            <h5 className="itemNavBar">Inform</h5>
          </div>
          <div>
            <div>
              <img />
            </div>
            <h5 className="itemNavBar">GIF Viewer</h5>
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
      <div></div>
    </div>
  );
};
export default NavBar;
