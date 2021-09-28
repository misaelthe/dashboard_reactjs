import { useEffect, useState } from "react";
import { fetchTopCharacters } from "../helpers/getJapaneseStuff";

export const useFetchTopCharacters = ({ page }) => {
  const getTopCharacters = (p) => {
    fetchTopCharacters(p).then((res) => {
      setTimeout(() => {
        setCharacters(res);
      }, 1000);
    });
  };
  const [characters, setCharacters] = useState({
    data: [],
    status: 0,
    loading: true,
  });
  useEffect(() => {
    getTopCharacters(page);
  }, []);
  return characters;
};
