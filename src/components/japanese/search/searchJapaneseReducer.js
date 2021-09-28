import React from "react";

export const searchJapaneseReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { ...state, ...action.payload };
    case "searchPage":
      return { ...state, page: action.payload.page };
    case "searchType":
      return { ...state, type: action.payload.type };
    case "asas":
      break;
    default:
      console.log("enen");
      return { ...state, type: "primerstate" };
  }
  return <div></div>;
};
