import React, { useEffect, useReducer, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { searchJapaneseReducer } from "./searchJapaneseReducer";
import { SearchBar } from "./SearchBar";
import { fetchSearch } from "../../../helpers/getJapaneseStuff";

export const SearchGrid = () => {
  const types = ["anime", "manga", "character", "person"];
  const inputSearch = useRef();
  const classes = styleSheet();
  const init = () => {
    return {
      type: "",
      q: "",
      page: 1,
      data: null,
    };
  };
  const [search, dispatch] = useReducer(searchJapaneseReducer, [], init);
  useEffect(() => {
    localStorage.setItem("searchJapanese", JSON.stringify(search));
  }, [search]);
  const handlerSearch = (type, q, page) => {
    fetchSearch(type, q, page).then((res) => {
      console.log(type + " es" + search.q + "" + res);
      dispatch({ type: "search", payload: { type, q, page, data: res } });
    });
  };
  return (
    <div>
      <h1 className={classes.header}>Search</h1>
      <SearchBar cboItems={types} handlerSearch={handlerSearch} />
      <div className={classes.bodySearch}>
        {search.data &&
          search.data.slice(1, 5).map((elm) => {
            return (
              <div className={`${classes.header}`}>
                <img src={elm.image_url} />
                <p className={`${classes.header}`}>{elm.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const styleSheet = makeStyles({
  container: {},
  header: { color: "white" },
  nav: {
    width: "100%",
    height: "70px",
  },
  clmSearch: {
    width: "30%",
  },
  bodySearch: { height: "350px", display: "flex", justifyContent: "center" },
  text: { color: "white" },
});
