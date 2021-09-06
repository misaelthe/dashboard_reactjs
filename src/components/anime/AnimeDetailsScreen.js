import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { searchItemOnJikan } from "../../helpers/getMedia";
import { createUseStyles } from "react-jss";
export const AnimeDetailsScreen = ({ history }) => {
  const classes = useStyles();
  const { type, mal_id } = useParams();
  const [item, setItem] = useState({});
  const getItem = async () => {
    const obj = await searchItemOnJikan(type, mal_id);
    setItem(obj);
  };
  useEffect(() => {
    getItem();
  }, []);
  if (item == null) return <Redirect to="/anime" />;
  const showDescription = () => {
    if (type === "anime") {
      return (
        <>
          <h3>{item.title}</h3>
          <p>{item.synopsis}</p>
        </>
      );
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <img src={item.image_url} />
      </div>
      <div className={classes.containerDescription}>
        {showDescription()}
        <button
          className="btn btn-lg btn-outline-success"
          onClick={() => {
            history.goBack();
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  container: {
    width: "85%",
    display: "flex",
    justifyContent: "center",
  },
  containerImg: {
    width: "25%",
  },
  containerDescription: {
    width: "60%",
  },
});
