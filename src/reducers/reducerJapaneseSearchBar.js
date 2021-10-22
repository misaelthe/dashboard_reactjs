import TYPES from "../constants/cntJapanese";
export const reducerJapaneseSearchBar = (state, action) => {
  switch (action.type) {
    case TYPES.SET_TYPE:
      return {
        ...state,
        type: action.payload.type,
        genreDisabled: action.payload.genreDisabled,
        genreOptions: action.payload.genreOptions,
      };
    case TYPES.SET_Q:
      return { ...state, q: action.payload.q };
    case TYPES.SET_PAGE:
      return { ...state, page: action.payload.page };
    case TYPES.SET_GENRE:
      return { ...state, genre: action.payload.genre };
    default:
      return state;
  }
};
