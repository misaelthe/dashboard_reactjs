import React from "react";
import { makeStyles } from "@material-ui/styles";
export const CharacterItem = ({ data, history }) => {
  const classes = styleSheet();
  console.log(data);
  return (
    <div className={`card bg-dark text-white ${classes.container}`}>
      <img src={data.image_url} className="card-img" alt={data.title} />
      <div className="card-img-overlay">
        <h5 className="card-title">{data.title}</h5>
      </div>
    </div>
  );
};
const styleSheet = makeStyles({
  container: { width: "16%" },
});
