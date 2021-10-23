import { JP_REDUCER } from "../constants/cntJapanese";
export const reducerJapaneseSearchBar = (state, action) => {
  switch (action.type) {
    case JP_REDUCER.SET_TYPE:
      return {
        ...state,
        type: action.payload.type,
        genreDisabled: action.payload.genreDisabled,
        genreOptions: action.payload.genreOptions,
      };
    case JP_REDUCER.SET_Q:
      return { ...state, q: action.payload.q };
    case JP_REDUCER.SET_PAGE:
      return { ...state, page: action.payload.page };
    case JP_REDUCER.SET_GENRE:
      const selectedGenres = action.payload.selectedGenres.map((val) => {
        return { ...val, selected: true };
      });
      const idsGenres = selectedGenres.map((val) => val.id);
      const genreOptions = state.genreOptions.map((val) => {
        if (idsGenres.includes(val.id)) val.selected = true;
        return val;
      });

      return {
        ...state,
        selectedGenres: selectedGenres,
        genreOptions: genreOptions,
      };
    case JP_REDUCER.REMOVE_GENRE:
      const activeGenres = state.selectedGenres.filter((val) => {
        return val.id !== action.payload.id_genre;
      });
      const actIds = activeGenres.map((val) => val.id);
      const mappedOptions = state.genreOptions.map((val) => {
        if (!actIds.includes(val.id)) return { ...val, selected: false };
        return val;
      });
      return {
        ...state,
        selectedGenres: activeGenres,
        genreOptions: mappedOptions,
      };
    default:
      return state;
  }
};
