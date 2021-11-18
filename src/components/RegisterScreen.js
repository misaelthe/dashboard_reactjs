import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {};
  return (
    <div className="register__main">
      <div className="register__box-container">
        <h4 className="register__title">Register</h4>
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
        <Box>
          <TextField
            label="Confirm password"
            password
            variant="standard"
            fullWidth
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Box>
        <div className="content-center-center register__box-button">
          <button className="register__button" onClick={() => handleRegister()}>
            Register
          </button>
        </div>
        <Link to="/login" className="register__link">
          Already Register
        </Link>
      </div>
    </div>
  );
};
export default RegisterScreen;
