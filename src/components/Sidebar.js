import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { Home, Gif, EventNote } from "@mui/icons-material";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { authenticationTypes } from "../constants/authenticationTypes";
export const Sidebar = () => {
  const history = useHistory();
  const [japaneseOpen, setJapaneseOpen] = useState(true);
  const showJapaneseItems = () => {
    setJapaneseOpen(!japaneseOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.replace("/login");
  };
  return (
    <div className="sidebar__main">
      <div className="sidebar__header"></div>
      <div className="sidebar__body">
        <div className="sidebar__box-link">
          <Home sx={{ color: "white" }} fontSize="large" />
          <Link to="/home" className="text-decoration-none">
            <span>Home</span>
          </Link>
        </div>
        <div className="sidebar__box-link">
          <Gif sx={{ color: "white" }} fontSize="large" />
          <Link to="/gifviewer" className="text-decoration-none">
            <span>Gif</span>
          </Link>
        </div>
        <div className="sidebar__box-link" onClick={() => handleLogout()}>
          <Gif sx={{ color: "white" }} fontSize="large" />
          <span>Log Out</span>
        </div>
      </div>
      <Link
        to="/japanese"
        className="text-decoration-none"
        onClick={showJapaneseItems}
      >
        <div className="sidebar__box-link">
          <Home fontSize="large" />
          <span>Japanese</span>
          {japaneseOpen ? <ExpandLess /> : <ExpandMore />}
        </div>
      </Link>

      <Collapse in={japaneseOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/japanese/search" className="text-decoration-none">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </div>
  );
};
