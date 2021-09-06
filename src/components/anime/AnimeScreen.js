import React from "react";
import { createUseStyles } from "react-jss";
import { MediaGrid } from "./MediaGrid";
import "../../css/AnimeScreen.css";
import { CharactersGrid } from "./characters/CharactersGrid";
const AnimeScreen = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CharactersGrid history={history} />

      <div>
        <h3 className="headerAnime">Anime</h3>
        <MediaGrid history={history} typeItem="anime" />
      </div>
      <div>
        <h3 className="headerAnime">Manga</h3>
        <MediaGrid history={history} typeItem="manga" />
      </div>
      <div>
        <h3 className="headerAnime">People</h3>
        <MediaGrid history={history} typeItem="people" />
      </div>
    </div>
  );
};
export default AnimeScreen;
const useStyles = createUseStyles({
  container: { width: "85%" },
});
