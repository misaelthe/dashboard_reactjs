import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CharactersGrid } from "./characters/CharactersGrid";
import { AnimeGrid } from "./anime/AnimeGrid";
import { SearchGrid } from "./search/SearchGrid";
const JapaneseScreen = ({ history }) => {
  const classes = styleSheet();
  return (
    <div className={classes.container}>
      <AnimeGrid history={history} />
      {/* <CharactersGrid history={history} /> */}

      <div>
        <h3 className={classes.header}>Manga</h3>
      </div>
      <div>
        <h3 className={classes.header}>People</h3>
      </div>
      <SearchGrid />
    </div>
  );
};
export default JapaneseScreen;
const styleSheet = makeStyles({
  container: { width: "85%" },
  header: {
    fontSize: "40px",
    fontWeight: 600,
    fontFamily: '"Poppins", sans-serif',
    color: "white",
  },
});
