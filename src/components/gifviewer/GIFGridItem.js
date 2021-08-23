import React from "react";
import PropTypes from "prop-types";
import "../../css/GIFViewer.css";
const GIFGridItem = ({ id, title, url, size }) => {
  const sizeCard = size === "large" ? "card-large" : "card-medium";
  console.log(sizeCard);
  return (
    <div className={sizeCard + " card animate__bounce"}>
      <img src={url} key={id} alt={title} className="cardImg" />
      <p className="cardDescription">{title}</p>
    </div>
  );
};
export default GIFGridItem;
