import React from "react";
import { createUseStyles } from "react-jss";
import { Redirect } from "react-router-dom";
export const AnimeItem = ({ data, history, typeSearch }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      onClick={() => {
        if (typeSearch === "characters") typeSearch = "character";
        history.push(`/anime/${typeSearch}/${data.mal_id}`);
      }}
    >
      <div>
        <img src={data.image_url} className={classes.img} />
      </div>
      <div>
        <h3 className={classes.header}>{data.title}</h3>
        {typeSearch === "anime" || typeSearch === "manga" ? (
          <div className={classes.description}>
            <h3 className={classes.subtitle}>{`Episodes: ${data.episodes}`}</h3>
            <h3 className={classes.subtitle}>{data.type}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  container: { width: "13%" },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  description: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  img: { height: 300, width: "100%" },
  header: {
    fontSize: 19,
    color: "white",
    padding: "10px 0px",
  },
});
