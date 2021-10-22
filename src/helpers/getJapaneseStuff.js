import axios from "axios";
const instance = axios.create({
  baseURL: `https://api.jikan.moe/v3`,
  responseType: "json",
  timeout: 10000,
});
export const fetchTop = async (type, page, subType) => {
  try {
    const {
      data: { top },
    } = await instance.get(`/top/${type}/${page}/${subType}`);
    return top;
  } catch (e) {
    return null;
  }
};
export const fetchSearch = async (type, q, page) => {
  try {
    const {
      data: { results },
    } = await instance.get(`/search/${type}?q=${q}&${page}`);
    return results;
  } catch (e) {
    throw "No se pudo conseguir la data";
  }
};
