import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Gif, EventNote } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
const NavBar = () => {
  const [japaneseOpen, setJapaneseOpen] = useState(true);
  const showJapaneseItems = () => {
    setJapaneseOpen(!japaneseOpen);
  };
  return (
    <Box>
      <h3 className="header">Menu</h3>
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
      </List>
    </Box>
  );
};
export default NavBar;
