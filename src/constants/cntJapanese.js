const JP_REDUCER = {
  SET_TYPE: "SET_TYPE",
  SET_Q: "SET_Q",
  SET_PAGE: "SET_PAGE",
  SET_GENRE: "SET_GENRE",
  REMOVE_GENRE: "REMOVE_GENRE",
};
const JP_TYPES = [
  { name: "Anime" },
  { name: "Manga" },
  { name: "Character" },
  { name: "Person" },
];
const JP_UNITS = {
  anime: "Anime",
  manga: "Manga",
  shared: "Shared",
};
const JP_GENRES = [
  { id: 1, type: JP_UNITS.shared, name: "Action", id_api: 1 },
  { id: 2, type: JP_UNITS.shared, name: "Adventure", id_api: 2 },
  { id: 3, type: JP_UNITS.shared, name: "Cars", id_api: 3 },
  { id: 4, type: JP_UNITS.shared, name: "Comedy", id_api: 4 },
  { id: 5, type: JP_UNITS.shared, name: "Avante Garde", id_api: 5 },
  { id: 6, type: JP_UNITS.shared, name: "Demons", id_api: 6 },
  { id: 7, type: JP_UNITS.shared, name: "Mystery", id_api: 7 },
  { id: 8, type: JP_UNITS.shared, name: "Drama", id_api: 8 },
  { id: 9, type: JP_UNITS.shared, name: "Ecchi", id_api: 9 },
  { id: 10, type: JP_UNITS.shared, name: "Fantasy", id_api: 10 },
  { id: 11, type: JP_UNITS.shared, name: "Game", id_api: 11 },
  { id: 12, type: JP_UNITS.shared, name: "Hentai", id_api: 12 },
  { id: 13, type: JP_UNITS.shared, name: "Historical", id_api: 13 },
  { id: 14, type: JP_UNITS.shared, name: "Horror", id_api: 14 },
  { id: 15, type: JP_UNITS.shared, name: "Kid_apis", id_api: 15 },
  { id: 16, type: JP_UNITS.shared, name: "Martial Arts", id_api: 17 },
  { id: 17, type: JP_UNITS.shared, name: "Mecha", id_api: 18 },
  { id: 18, type: JP_UNITS.shared, name: "Music", id_api: 19 },
  { id: 19, type: JP_UNITS.shared, name: "Parody", id_api: 20 },
  { id: 20, type: JP_UNITS.shared, name: "Samurai", id_api: 21 },
  { id: 21, type: JP_UNITS.shared, name: "Romance", id_api: 22 },
  { id: 22, type: JP_UNITS.shared, name: "School", id_api: 23 },
  { id: 23, type: JP_UNITS.shared, name: "Sci Fi", id_api: 24 },
  { id: 24, type: JP_UNITS.shared, name: "Shoujo", id_api: 25 },
  { id: 25, type: JP_UNITS.shared, name: "Girls Love", id_api: 26 },
  { id: 26, type: JP_UNITS.shared, name: "Shounen", id_api: 27 },
  { id: 27, type: JP_UNITS.shared, name: "Boys Love", id_api: 28 },
  { id: 28, type: JP_UNITS.shared, name: "Space", id_api: 29 },
  { id: 29, type: JP_UNITS.shared, name: "Sports", id_api: 30 },
  { id: 30, type: JP_UNITS.shared, name: "Super Power", id_api: 31 },
  { id: 31, type: JP_UNITS.shared, name: "Vampire", id_api: 32 },
  { id: 32, type: JP_UNITS.shared, name: "Harem", id_api: 35 },
  { id: 33, type: JP_UNITS.shared, name: "Slice Of Life", id_api: 36 },
  { id: 34, type: JP_UNITS.shared, name: "Supernatural", id_api: 37 },
  { id: 35, type: JP_UNITS.shared, name: "Military", id_api: 38 },
  { id: 36, type: JP_UNITS.shared, name: "Police", id_api: 39 },
  { id: 37, type: JP_UNITS.shared, name: "Psychological", id_api: 40 },
  { id: 38, type: JP_UNITS.shared, name: "Award Winning", id_api: 46 },
  { id: 39, type: JP_UNITS.shared, name: "Gourmet", id_api: 47 },
  { id: 40, type: JP_UNITS.shared, name: "Work Life", id_api: 48 },
  { id: 41, type: JP_UNITS.shared, name: "Erotica", id_api: 49 },
  { id: 42, type: JP_UNITS.anime, name: "Suspense", id_api: 41 },
  { id: 43, type: JP_UNITS.anime, name: "Seinen", id_api: 42 },
  { id: 44, type: JP_UNITS.anime, name: "Josei", id_api: 43 },
  { id: 45, type: JP_UNITS.manga, name: "Seinen", id_api: 41 },
  { id: 46, type: JP_UNITS.manga, name: "Josei", id_api: 42 },
  { id: 47, type: JP_UNITS.manga, name: "Doujinshi", id_api: 43 },
  { id: 48, type: JP_UNITS.manga, name: "Gender Bender", id_api: 44 },
  { id: 49, type: JP_UNITS.manga, name: "Suspense", id_api: 45 },
];
export { JP_REDUCER, JP_GENRES, JP_TYPES, JP_UNITS };