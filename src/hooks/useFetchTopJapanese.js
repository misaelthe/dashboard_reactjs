import { useEffect, useState } from "react";
import { fetchTop } from "../helpers/getJapaneseStuff";

export const useFetchTopJapanese = (type, page, subtype) => {
  const getTopJapanese = (p, st) => {
    if (p < 1) {
      setResponse({
        data: [],
        status: -1,
        loading: false,
        msg: "Page number invalid",
        getTopJapanese,
      });
    } else {
      setResponse({ data: [], status: 0, loading: true, getTopJapanese });
      fetchTop(type, p, st).then((top) => {
        setTimeout(() => {
          if (top == null) {
            setResponse({
              data: [],
              status: -1,
              loading: false,
              msg: "Content couldn't be loaded",
              getTopJapanese,
            });
          } else {
            setResponse({
              data: top,
              status: 1,
              loading: false,
              getTopJapanese,
            });
          }
        }, 1000);
      });
    }
  };
  const [response, setResponse] = useState({
    data: [],
    status: 0,
    loading: true,
    getTopJapanese,
  });
  useEffect(() => {
    getTopJapanese(page, subtype);
  }, [page, subtype]);
  return response;
};
