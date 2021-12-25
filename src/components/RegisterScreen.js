import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import validator from "validator";
import { registerWithEmailPassword } from "../actions/authenticationAction";
import { removeUiError, setUiError } from "../actions/uiAction";
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { messageError } = useSelector((state) => state.ui);
  const initialState = {
    name: "",
    password: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialState);
  useEffect(() => {
    return () => {
      dispatch(removeUiError());
    };
  }, [dispatch]);
  const { name, password, email } = formValues;
  const handleRegister = () => {
    if (validInputs()) {
      dispatch(registerWithEmailPassword(email, password, name));
      setFormValues(initialState);
    }
  };
  const validInputs = () => {
    if (name.trim().length < 1) {
      dispatch(setUiError("Fix Name"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setUiError("Fix Email"));
      return false;
    }
    if (password.trim().length < 1) {
      dispatch(setUiError("Fix Password"));
      return false;
    }
    dispatch(removeUiError);
    return true;
  };
  return (
    <div className="register__main">
      <div className="register__box-container">
        <h4 className="register__title">Register</h4>
        <Box>
          <TextField
            label="Name"
            variant="standard"
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, name: value })
            }
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Email"
            variant="standard"
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, email: value })
            }
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            variant="standard"
            fullWidth
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, password: value })
            }
          />
        </Box>
        <div className="register__errorMessage">
          {messageError && <p>{messageError}</p>}
        </div>
        <div className="content-center-center register__box-button">
          <button
            className="register__button"
            onClick={(e) => handleRegister()}
          >
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
