import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { authenticationTypes } from "../constants/authenticationTypes";
const LoginScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(AuthenticationContext);
  const handleLogin = () => {
    dispatch({
      type: authenticationTypes.login,
      payload: { username: username, password: password },
    });
    history.replace("/");
  };
  return (
    <div className="login__main">
      <div className="login__box-container">
        <h4 className="login__title">Login</h4>
        <Box>
          <TextField
            label="User"
            variant="standard"
            onChange={({ target: { value } }) => setUsername(value)}
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            variant="standard"
            fullWidth
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Box>
        <div className="login__group-login-buttons">
          <button className="login__button" onClick={() => handleLogin()}>
            Log In
          </button>
          <Link to="/register">
            <button className="login__button">Sign Up</button>
          </Link>
        </div>
        <div>
          <p className="text-center">or log in with</p>
          <div className="login__group-social-buttons">
            <div className="login__div-button">
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
      </div>
    </div>
  );
};
export default LoginScreen;
