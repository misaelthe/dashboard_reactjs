const fetchGIFs = async (category, offset, limit, rating, lang) => {
  const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=S6KJyAUUatdC1UyULrMkRDlmyUyrZ76K&q=${encodeURI(
    category
  )}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&random_id=e826c9fc5c929e0d6c6d423841a282aa`;
  const response = await fetch(baseUrl);
  const dataJSON = await response.json();
  const { data } = dataJSON;
  const GIFObjectArray = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized.url,
      height: img.images.downsized.height,
      width: img.images.downsized.width,
      size:
        img.images.downsized.width / img.images.downsized.height > 1.5
          ? "large"
          : "medium",
    };
  });
  return GIFObjectArray;
};
export const getGIFs = async (
  category,
  offset,
  limit,
  rating = "g",
  lang = "en"
) => {
  console.log("limite es: " + JSON.stringify(limit));
  const arrayImgs = await fetchGIFs(category, offset, limit, rating, lang);
  const outputImgs = [];
  for (let img of arrayImgs) {
    if (limit < 1) {
      break;
    } else if ((limit === 1 || limit === 5) && img.size === "large") {
      limit--;
    } else {
      if (img.size === "large") {
        limit -= 2;
      } else {
        limit -= 1;
      }
      outputImgs.push(img);
    }
  }
  return outputImgs;
};
