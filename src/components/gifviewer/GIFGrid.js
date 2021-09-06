import React, { useState } from "react";
import GIFGridItem from "./GIFGridItem";
import { useFetchGIFs } from "../../hooks/useFetchGIFs";

import PropTypes from "prop-types";
import "../../css/GIFScreen.css";

const GIFGrid = ({ category, limit }) => {
  const { data, loading } = useFetchGIFs(category, 0, limit.current);

  return (
    <>
      <h3 className="category">{category}</h3>
      {loading && <h3 className="msgLoading">Loading</h3>}
      <div id="gridContainer">
        {data.map((img) => {
          return <GIFGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
GIFGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
export default GIFGrid;
