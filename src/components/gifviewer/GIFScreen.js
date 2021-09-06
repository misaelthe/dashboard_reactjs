import React, { useState, useRef } from "react";
import { AddCategory } from "./AddCategory.js";
import GIFGrid from "./GIFGrid";
import "../../css/GIFScreen.css";
const GIFScreen = () => {
  const [categories, setCategories] = useState(["Invincible"]);
  const limit = useRef(4);
  return (
    <div id="gifscreen">
      <h2 id="heading">GIFViewer</h2>

      <AddCategory setCategories={setCategories} limit={limit} />

      {categories.map((el) => {
        console.log("en viewer" + limit.current);
        return <GIFGrid category={el} key={el} limit={limit} />;
      })}
    </div>
  );
};
export default GIFScreen;
