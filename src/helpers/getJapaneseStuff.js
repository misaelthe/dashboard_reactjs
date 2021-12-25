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
  try {
    
    console.log(`/search/${type}?q=${q}&${page}${genreParameter}`);
    const {
      data: { results },
    } = await instance.get(`/search/${type}?q=${q}&${page}${genreParameter}`);

    const message = results.length ? "Data fetched" : "No data found";
    const icon = results.length ? "CheckCircle" : "Warning";
    return { loading: false, status: 200, message, results, icon };
  } catch (e) {
    console.log(e);
    if (e.response !== undefined && "status" in e.response) {
      return {
        loading: false,
        status: e.response.status,
        message: e.response.statusText,
        results: [],
        icon: "Error",
      };
    } else {
      return {
        loading: false,
        status: 1000,
        message: "Timeout",
        results: [],
        icon: "TimerOff",
      };
    }
  }
};
