import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, limit }) => {
  const [category, setCategory] = useState("");
  const [rows, setRows] = useState(1);
  const [numberImgs, setNumberImgs] = useState(4);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim() === "") return null;
    setCategories((categories) => [category, ...categories]);
    limit.current = numberImgs * rows;
    setCategory("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="formRow">
        <div className="form-floating col-md-3">
          <input
            type="text"
            className="form-control"
            id="inCategory"
            onChange={(e) => {
              setCategory(
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              );
            }}
            value={category}
          />
          <label for="inCategory">Category</label>
        </div>
        <div className="form-floating col-md-2">
          <select
            className="form-select"
            id="selRows"
            value={rows}
            onChange={(e) => {
              setRows(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <label for="selRows">Number of rows</label>
        </div>
        <div className="form-floating col-md-2">
          <select
            className="form-select"
            id="selNumberImgs"
            value={numberImgs}
            onChange={(e) => {
              setNumberImgs(e.target.value);
            }}
          >
            <option value="4">2-4</option>
            <option value="6">3-6</option>
          </select>
          <label for="selNumberImgs">Images per row</label>
        </div>
        <div className="d-grid gap-2 col-md-3">
          <button type="submit" className="btn btn-lg btn-outline-success">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
