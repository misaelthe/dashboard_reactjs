import axios from "axios";
const mainUrl = "https://api.jikan.moe/v3";
export const fetchTopOnJikan = async (
  type,
  page = 1,
  subtype = "",
  idxStart = 0,
  idxEnd = 5
) => {
  const baseUrl =
    `https://api.jikan.moe/v3/top/${type}/${page}` + (subtype && `/${subtype}`);
  const response = await fetch(baseUrl);
  const { top } = await response.json();
  const listTopOnJikan = top.map((el) => {
    return {
      "mal_id": el.mal_id,
      "title": el.title,
      "image_url": el.image_url,
      "type": el.type,
      "episodes": el.episodes,
    };
  });
  return listTopOnJikan.slice(idxStart, idxEnd);
};
export const searchOnJikan = async (
  type,
  q,
  page = 1,
  idxStart = 0,
  idxEnd = 5
) => {
  const baseUrl = `https://api.jikan.moe/v3/search/${type}?q=${encodeURI(
    q
  )}&page=${page}`;
  const response = await fetch(baseUrl);
  const { results } = await response.json();
  return results.slice(idxStart, idxEnd);
};
export const searchItemOnJikan = async (type, mal_id) => {
  try {
    const instance = axios.create({
      baseURL: `${mainUrl}/${type}/${mal_id}`,
    });
    const { data } = await instance.get();
    console.log("g" + data);
    let obj;
    if (type === "character") {
      obj = {
        mal_id: data.mal_id,
        url: data.url,
        name: data.name,
        nickname: data.nicknames,
        about: data.about,
        image_url: data.image_url,
      };
    } else if (type === "anime") {
      obj = {
        mal_id: data.mal_id,
        url: data.url,
        title: data.title,
        type: data.type,
        duration: data.duration,
        synopsis: data.synopsis,
        image_url: data.image_url,
      };
    } else if (type === "manga") {
      obj = {
        mal_id: data.mal_id,
        url: data.url,
        title: data.title,
        type: data.type,
        duration: data.duration,
        synopsis: data.synopsis,
        image_url: data.image_url,
      };
    } else if (type === "people") {
      obj = {
        mal_id: data.mal_id,
        url: data.url,
        title: data.title,
        type: data.type,
        duration: data.duration,
        synopsis: data.synopsis,
        image_url: data.image_url,
      };
    }
    return obj;
  } catch (e) {
    console.log("gsss");
    return null;
  }
};
{
  /*export const saveOnDatabase = (varArray, ixStrt, ixEnd) => {
  try {
    if (!fs.existsSync(pathDatabase))
      fs.mkdir(pathDatabase, (er) => {
        if (er) return console.error("No se pudo crear el directorio");
        console.log("Directorio creado");
      });
    fs.writeFileSync(pathDatabase, JSON.stringify(varArray));
  } catch (e) {
    console.error(e);
  }
};*/
}
const loadFromDatabase = () => {};
