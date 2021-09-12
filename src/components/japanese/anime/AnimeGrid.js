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
  const [subType, setSubType] = useState(subTypes[0]);
  const { data, status, loading, getTopJapanese } = useFetchTopJapanese(
    "anime",
    1,
    subType
  );
  const changeIndex = (ix) => {
    setIndex(ix);
  };
  const changeSubType = (st) => {
    getTopJapanese(1, st);
    setSubType(st);
  };
  return (
    <div>
      <div className={classes.grid}>
        <h3 className={classes.headerText}>Top Anime</h3>
        <div className={classes.divComboBox}>
          <ComboBox
            arrayValues={subTypes}
            dftItem={subType}
            setter={changeSubType}
          />
        </div>
        <div className={classes.paginationContainer}>
          <div className={classes.rowPagination}>
            <div className={`input-group input-group-sm ${classes.divSearch}`}>
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Page
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                type="number"
                id="inputPage"
              />
            </div>
            <button
              type="button"
              className={`btn btn-secondary ${classes.buttonSearch}`}
              onClick={() => {
                const pageVal = document.getElementById("inputPage").value;
                getTopJapanese(pageVal, subType);
                setIndex(1);
              }}
            >
              Search
            </button>
          </div>
          <div className={classes.rowPagination}>
            <Pagination
              length={Math.ceil(data.length / 5)}
              index={index}
              changeIndex={changeIndex}
            />
          </div>
        </div>
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
    width: "33.2%",
  },
  divComboBox: {
    width: "16.4%",
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "column",
    width: "21%",
  },
  rowPagination: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "5px 0px",
  },
  divSearch: {
    width: "45%",
  },
  buttonSearch: {
    width: "30%",
  },
});
