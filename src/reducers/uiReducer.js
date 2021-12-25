import { authenticationTypes } from "../constants/authenticationTypes";
const initialState = {
  messageError: null,
  loading: false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationTypes.uiSetError:
      return { ...state, messageError: action.payload };
    case authenticationTypes.uiRemoveError:
      return { ...state, messageError: null };
    case authenticationTypes.uiStartLoading:
      return { ...state, loading: true };
    case authenticationTypes.uiFinishLoading:
      return { ...state, loading: false };
    default:
      return state;
  }
};
