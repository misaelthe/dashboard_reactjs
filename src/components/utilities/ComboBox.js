import React from "react";

export const ComboBox = ({ arrayValues, dftItem, setter }) => {
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
            <a className="dropdown-item">{item}</a>
          </li>
        );
      }
    });
    return items;
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dftItem}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {getItems()}
      </ul>
    </div>
  );
};
