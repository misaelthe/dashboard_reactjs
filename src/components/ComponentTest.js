import { FetchData } from "../helpers/FetchData";

const ComponentTest = () => {
  const { data, loading } = FetchData("https://api.jikan.moe/v3/top/anime/1");
  return <div id={data}>res: {loading}</div>;
};
export default ComponentTest;
