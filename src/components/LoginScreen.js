import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import {
  loginWithEmailPassword,
  loginWithGoogle,
} from "../actions/authenticationAction";
import { removeUiError } from "../actions/uiAction";
import ComponentTest from "./ComponentTest";
const LoginScreen = () => {
  //HOOKS
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, messageError } = useSelector((state) => state.ui);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    return () => {
      dispatch(removeUiError());
    };
  }, [dispatch]);
  //DESESTRUCTURATION
  const { email, password } = formValues;
  //FUNCTIONS
  const loginWithEmailAndPassword = () => {
    dispatch(loginWithEmailPassword(email, password));
  };
  const signInWithGoogle = () => {
    dispatch(loginWithGoogle());
  };
  const handleSignUp = () => {
    history.push("/register");
  };
  return (
    <div className="login__main">
      <div className="login__box-container">
        <h4 className="login__title">Login</h4>
        <Box>
          <TextField
            label="User"
            variant="standard"
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, email: value })
            }
            value={email}
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            variant="standard"
            value={password}
            fullWidth
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, password: value })
            }
          />
        </Box>
        <div>{messageError}</div>
        <div className="login__group-login-buttons">
          <button
            className={loading ? "login__button-deactivated" : "login__button"}
            onClick={() => loginWithEmailAndPassword()}
            disabled={loading}
          >
            Log In
          </button>
          <button className="login__button" onClick={() => handleSignUp()}>
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center">or log in with</p>
          <div className="login__group-social-buttons">
            <div
              className="login__div-button"
              onClick={() => signInWithGoogle()}
            >
              <Google />
            </div>
            <div className="login__div-button">
              <Facebook />
            </div>
            <div className="login__div-button">
              <Apple />
            </div>
          </div>
        </div>
        <div>
          <ComponentTest />
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
