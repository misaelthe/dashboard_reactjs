import React from "react";
import { MediaGrid } from "./MediaGrid";
import { makeStyles } from "@material-ui/styles";
import { CharactersGrid } from "./characters/CharactersGrid";
import { AnimeGrid } from "./anime/AnimeGrid";
const JapaneseScreen = ({ history }) => {
  const classes = styleSheet();
  return (
    <div className={classes.container}>
      <AnimeGrid history={history} />
      <CharactersGrid history={history} />

      <div>
        <h3 className={classes.header}>Manga</h3>
        <MediaGrid history={history} typeItem="manga" />
      </div>
      <div>
        <h3 className={classes.header}>People</h3>
        <MediaGrid history={history} typeItem="people" />
      </div>
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
