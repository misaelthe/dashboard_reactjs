import {
  googleAuthenticationProvider,
  auth,
} from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { authenticationTypes } from "../constants/authenticationTypes";
import { finishLoading, startLoading, setUiError } from "./uiAction";

export const loginAsync = (uid, name) => {
  return (dispatch) => {
    dispatch(login(uid, name));
  };
};
//LOGIN WITH EMAIL AND PASSWORD
export const registerWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        await updateProfile(auth.currentUser, { displayName: name });
        console.log(email, password, name);
        dispatch(login(auth.currentUser.uid, name));
      })
      .catch((e) => {
        dispatch(setUiError("No se pudo registrar su correo: " + e));
      });
  };
};
export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        dispatch(login(credential.user.uid, credential.user.displayName));
      })
      .catch((e) => {
        setUiError("Something went wrong when logging you in: " + e);
      });
    dispatch(finishLoading());
  };
};
//LOGIN WITH GOOGLE
export const loginWithGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthenticationProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) =>
        dispatch(setUiError("We couldn't register you with Google"))
      );
  };
};
export const registerUser = (name, email, password) => {
  return {
    type: authenticationTypes.register,
    payload: { name, email, password },
  };
};
export const login = (uid, name) => {
  return {
    type: authenticationTypes.login,
    payload: {
      uid,
      name,
    },
  };
};
