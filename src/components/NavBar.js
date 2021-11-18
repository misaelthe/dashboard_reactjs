import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Gif, EventNote } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { authenticationTypes } from "../constants/authenticationTypes";
const NavBar = () => {
  const { user, dispatch } = useContext(AuthenticationContext);
  const [japaneseOpen, setJapaneseOpen] = useState(true);
  const showJapaneseItems = () => {
    setJapaneseOpen(!japaneseOpen);
  };
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: authenticationTypes.logout, payload: {} });
    history.replace("/login");
  };
  return (
    <Box>
      <h3 className="header">{user.username}</h3>
      <List sx={{ width: "100%" }}>
        <Link to="/home">
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>

        <Link to="/japanese">
          <ListItemButton onClick={showJapaneseItems}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Japanese" />
            {japaneseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Link>

        <Collapse in={japaneseOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/japanese/search">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <Gif />
          </ListItemIcon>
          <Link to="/gifviewer" color="primary">
            <ListItemText primary="GifViewer" />
          </Link>
        </ListItemButton>
        <ListItemButton onClick={() => handleLogout()}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
};
export default NavBar;
