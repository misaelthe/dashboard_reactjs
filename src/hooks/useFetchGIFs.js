import { useEffect, useState } from "react";
import { getGIFs } from "../helpers/getGIFs";
export const useFetchGIFs = (category, index, limit) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGIFs(category, index, limit).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, []);
  return state;
};
