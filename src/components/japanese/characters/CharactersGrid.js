import React, { useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CharacterItem } from "./CharacterItem";
export const CharactersGrid = ({ history }) => {
  const classes = styleSheet();
  return <div></div>;
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
