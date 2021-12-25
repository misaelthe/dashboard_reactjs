import { authenticationTypes } from "../constants/authenticationTypes";

export const setUiError = (error) => ({
  type: authenticationTypes.uiSetError,
  payload: error,
});
export const removeUiError = () => ({
  type: authenticationTypes.uiRemoveError,
});
//Loading
export const startLoading = () => {
  return { type: authenticationTypes.uiStartLoading };
};
export const finishLoading = () => {
  return { type: authenticationTypes.uiFinishLoading };
};
