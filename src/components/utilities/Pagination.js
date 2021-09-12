import React from "react";

export const Pagination = ({ length, index, changeIndex }) => {
  const getIndexes = () => {
    const indexes = [];
    for (let i = 1; i <= length; i++) {
      indexes.push(
        <li
          className={`page-item ${i === index ? "active" : ""}`}
          aria-current="page"
          onClick={() => changeIndex(i)}
          key={`anime${i}`}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return indexes;
  };
  return (
    <nav>
      <ul className="pagination pagination-sm">{getIndexes()}</ul>
    </nav>
  );
};
