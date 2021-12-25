import { authenticationTypes } from "../constants/authenticationTypes";

export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case authenticationTypes.login:
      return { uid: action.payload.uid, name: action.payload.name };
    case authenticationTypes.logout:
      return {};
    case authenticationTypes.register:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
