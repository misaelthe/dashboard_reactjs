import { Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import GIFScreen from "../components/gifviewer/GIFScreen";
import HomeScreen from "../components/home/HomeScreen";
import JapaneseScreen from "../components/japanese/JapaneseScreen";
import { JapaneseSearchPage } from "../components/japanese/search/JapaneseSearchPage";
import { COLORS } from "../constants/colors";
import { Sidebar } from "../components/Sidebar";
const DashboardRoutes = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: COLORS.PRIMARY }}>
      <Box sx={{ width: "15%" }}>
        <Sidebar />
      </Box>
      <Box sx={{ width: "85%" }}>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route exact path="/japanese/search" component={JapaneseSearchPage} />
          <Route path="/gifviewer" component={GIFScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Box>
    </Box>
  );
};

export default DashboardRoutes;
