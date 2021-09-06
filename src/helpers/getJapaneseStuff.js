import axios from "axios";
const instance = axios.create({
  baseURL: `https://api.jikan.moe/v3`,
  responseType: "json",
  timeout: 10000,
});
export const fetchTopCharacters = async (page) => {
  try {
    const {
      data: { top },
    } = await instance.get(`/top/characters/${page}`);
    return { data: top, status: 200, loading: false };
  } catch (w) {
    return { data: null, status: 408, loading: false };
  }
};
