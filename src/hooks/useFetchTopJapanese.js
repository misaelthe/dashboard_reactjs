import { useEffect, useState } from "react";
import { fetchTop } from "../helpers/getJapaneseStuff";

export const useFetchTopJapanese = (type, page, subtype) => {
  const getTopJapanese = (p, st) => {
    fetchTop(type, p, st).then((top) => {
      if (top == null) {
        setResponse({ data: [], status: -1, loading: false, getTopJapanese });
      } else {
        setResponse({ data: top, status: 1, loading: false, getTopJapanese });
      }
    });
  };
  const [response, setResponse] = useState({
    data: [],
    status: 0,
    loading: true,
    getTopJapanese,
  });
  useEffect(() => {
    getTopJapanese(page, subtype);
  }, []);
  return response;
};
