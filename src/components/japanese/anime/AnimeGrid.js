import { useRef, useState } from "react";
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
  const searchInput = useRef();
  const { data, status, loading, msg, getTopJapanese } = useFetchTopJapanese(
    "anime",
    1,
    subType
  );
  const changeIndex = (ix) => {
    setIndex(ix);
  };
  const changeSubType = (st) => {
    searchInput.current.value = "";
    setSubType(st);
    getTopJapanese(1, st);
  };
  return (
    <div className={classes.container}>
      <div className={classes.control}>
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
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                type="number"
                ref={searchInput}
              />
            </div>
            <button
              type="button"
              className={`btn btn-secondary ${classes.buttonSearch}`}
              onClick={() => {
                const pageVal = searchInput.current.value;
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
        {status === -1 ? (
          <div className="alert alert-danger" role="alert">
            {msg}
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
  container: { height: "450px", overflow: "hidden" },
  control: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    height: "100px",
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    height: "350px",
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
