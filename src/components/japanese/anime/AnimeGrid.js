import React, { useEffect, useState } from "react";
import { useFetchTopJapanese } from "../../../hooks/useFetchTopJapanese";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import { AnimeItem } from "./AnimeItem";
import { Pagination } from "../../utilities/Pagination";
import { ComboBox } from "../../utilities/ComboBox";
export const AnimeGrid = ({ history }) => {
  const classes = styleSheet();
  const subTypes = ["tv", "movie", "airing", "upcoming", "ova", "special"];
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(1);
  const [subType, setSubType] = useState(subTypes[0]);
  const { data, status, loading, getTopJapanese } = useFetchTopJapanese(
    "anime",
    page,
    subType
  );
  const changeIndex = (ix) => {
    setIndex(ix);
  };
  const changeSubType = (st) => {
    getTopJapanese(page, st);
    setSubType(st);
  };
  return (
    <div>
      <div className={classes.grid}>
        <h3 className={classes.headerText}>Top Anime</h3>
        <ComboBox
          arrayValues={subTypes}
          dftItem={subType}
          setter={changeSubType}
        />
        <Pagination
          length={Math.ceil(data.length / 5)}
          index={index}
          changeIndex={changeIndex}
        />
        <input
          value={1}
          type="number"
          onChange={(e) => {
            getTopJapanese(e.target.value, subType);
          }}
        />
        <button type="button" onClick={() => getTopJapanese(subType, 1)}>
          Buscar
        </button>
      </div>
      <div className={classes.grid}>
        {loading && <CircularProgress size={50} />}
        {status === 408 ? (
          <div className="alert alert-danger" role="alert">
            Server Timeout
          </div>
        ) : (
          data.slice(5 * index - 5, 5 * index).map((item) => {
            return (
              <AnimeItem key={item.mal_id} data={item} history={history} />
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
