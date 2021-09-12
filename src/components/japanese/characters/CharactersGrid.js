import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFetchTopCharacters } from "../../../hooks/useFetchCharacters";
import { AnimeItem } from "../anime/AnimeItem";
import { CharacterItem } from "./CharacterItem";
export const CharactersGrid = ({ history }) => {
  const classes = styleSheet();
  const [index, setIndex] = useState(1);
  const { data, loading, status, setParams } = useFetchTopCharacters({
    page: 1,
    numItems: 5,
  });
  const getIndexes = () => {
    const listIndexes = [];
    for (let i = 1; i < 11; i++) {
      listIndexes.push(
        <li
          className={`page-item ${i === index ? "active" : ""}`}
          key={i}
          onClick={() => setIndex(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return listIndexes;
  };
  return (
    <div>
      <div className={classes.header}>
        <h3 className={classes.headerText}>Top Characters</h3>
        <nav>
          <ul className="pagination">{getIndexes()}</ul>
        </nav>
      </div>
      <div className={classes.grid}>
        {loading && <CircularProgress size={50} />}
        {status == 408 ? (
          <div className="alert alert-danger" role="alert">
            Server Timeout
          </div>
        ) : (
          data.slice(5 * index - 5, 5 * index).map((item) => {
            return (
              <CharacterItem key={item.mal_id} data={item} history={history} />
            );
          })
        )}
      </div>
    </div>
  );
};
const styleSheet = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
  },
  headerText: {
    fontSize: "27pt",
    color: "white",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "3%",
  },
});
