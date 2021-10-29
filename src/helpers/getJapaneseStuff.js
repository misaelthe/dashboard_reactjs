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
export const fetchSearch = async (type, q, page, genres) => {
  const genreIds = genres.map((genre) => {
    return genre.id_api;
  });
  const genreParameter =
    genreIds.length > 0 ? "&genre=" + genreIds.join(",") : "";
  console.log(`/seav///vvrch/${type}?q=${q}&${page}${genreParameter}`);
  try {
    const {
      data: { results },
    } = await instance.get(`/sea//rch/${type}?q=${q}&${page}${genreParameter}`);
    const message = results.length > 0 ? "Data fetched" : "No data found";
    return { loading: false, status: 0, message, results };
  } catch (e) {
    console.log(e.response);
    if (e.response != undefined && "status" in e.response) {
      return {
        loading: false,
        status: e.response.status,
        message: e.response.statusText,
        results: [],
      };
    } else {
      return {
        loading: false,
        status: -1,
        message: "Check your connection buddy",
        results: [],
      };
    }
  }
};
