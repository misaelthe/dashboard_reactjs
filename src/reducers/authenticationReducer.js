import { authenticationTypes } from "../constants/authenticationTypes";

export const authenticationReducer = (state, action) => {
  switch (action.type) {
    case authenticationTypes.login:
      return { ...action.payload, logged: true };
    case authenticationTypes.logout:
      return { logged: false };
    default:
      return state;
  }
};
