import React, { useState, useRef } from "react";
import { AddCategory } from "./AddCategory.js";
import GIFGrid from "./GIFGrid";
//import "../../css/index.css";
const GIFViewer = () => {
  const [categories, setCategories] = useState(["Invincible"]);
  const limit = useRef(4);
  return (
    <div className="content">
      <h2 id="heading">GIFViewer</h2>

      <AddCategory setCategories={setCategories} limit={limit} />

      {categories.map((el) => {
        console.log("en viewer" + limit.current);
        return <GIFGrid category={el} key={el} limit={limit} />;
      })}
    </div>
  );
};
export default GIFViewer;
