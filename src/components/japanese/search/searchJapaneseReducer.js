export const searchJapaneseReducer = (state, action) => {
  switch (action.type) {
    case "loadingSearch":
      console.log(state);
      return { ...state, loading: action.payload.loading };
    case "search":
      return { ...state, ...action.payload };
    case "error":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
