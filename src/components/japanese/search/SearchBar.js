import React, { useReducer, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
export const SearchBar = ({ cboItems, handlerSearch }) => {
  const classes = styleSheet();
  const qSearch = useRef();
  const typeSearch = useRef();
  return (
    <div className={classes.container}>
      <select class="form-select" ref={typeSearch}>
        {cboItems.map((elm) => {
          return <option value={elm}>{elm}</option>;
        })}
      </select>
      <input type="text" ref={qSearch} />
      <button
        className={`btn btn-primary`}
        onClick={() => {
          handlerSearch(typeSearch.current.value, qSearch.current.value, 1);
        }}
      >
        Search
      </button>
    </div>
  );
};
const styleSheet = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    height: "40px",
    width: "100%",
  },
});
