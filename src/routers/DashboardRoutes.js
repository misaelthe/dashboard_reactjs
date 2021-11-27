import { Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import GIFScreen from "../components/gifviewer/GIFScreen";
import HomeScreen from "../components/home/HomeScreen";
import NavBar from "../components/NavBar";
import JapaneseScreen from "../components/japanese/JapaneseScreen";
import { JapaneseSearchPage } from "../components/japanese/search/JapaneseSearchPage";
import { COLORS } from "../constants/colors";
import { useContext } from "react";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { PrivateRouter } from "./PrivateRouter";
import { Sidebar } from "../components/Sidebar";
const DashboardRoutes = () => {
  const {
    user: { logged },
  } = useContext(AuthenticationContext);
  return (
    <Box sx={{ display: "flex", backgroundColor: COLORS.PRIMARY }}>
      <Box sx={{ width: "15%" }}>
        <Sidebar />
      </Box>
      <Box sx={{ width: "85%" }}>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <PrivateRouter
            isAuthenticated={logged}
            path="/japanese"
            component={JapaneseScreen}
          />
          <Route exact path="/japanese/search" component={JapaneseSearchPage} />
          <Route path="/gifviewer" component={GIFScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Box>
    </Box>
  );
};

export default DashboardRoutes;
