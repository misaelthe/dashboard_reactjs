import React from "react";
import { makeStyles } from "@material-ui/styles";
export const ComboBox = ({ arrayValues, dftItem, setter }) => {
  const classes = styleSheet();
  const getItems = () => {
    const items = [];
    arrayValues.forEach((item, ix) => {
      if (item !== dftItem) {
        items.push(
          <li
            key={`subtype${item}`}
            onClick={() => {
              setter(item);
            }}
          >
            <span className="dropdown-item">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </li>
        );
      }
    });
    return items;
  };
  return (
    <div className={`dropdown ${classes.container}`}>
      <button
        className={`btn btn-secondary dropdown-toggle ${classes.container}`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dftItem.charAt(0).toUpperCase() + dftItem.slice(1)}
      </button>
      <ul
        className={`dropdown-menu ${classes.container}`}
        aria-labelledby="dropdownMenuButton1"
      >
        {getItems()}
      </ul>
    </div>
  );
};
const styleSheet = makeStyles({
  container: {
    width: "100%",
  },
});
