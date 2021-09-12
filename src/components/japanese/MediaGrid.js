import React, { useEffect, useState } from "react";
import { fetchTopOnJikan } from "../../helpers/getMedia";
import { createUseStyles } from "react-jss";
import { AnimeItem } from "./anime/AnimeItem";
export const MediaGrid = ({ typeItem, history }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const getMedia = async () => {
    const data = await fetchTopOnJikan(typeItem);
    setItems(data);
  };
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div className={classes.container}>
      {items.map((el) => {
        return (
          <AnimeItem
            key={el.mal_id}
            data={el}
            history={history}
            typeSearch={typeItem}
          />
        );
      })}
    </div>
  );
};
const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    width: "100%",
  },
});
