import React from "react";

const LoginScreen = ({ history }) => {
  return (
    <div>
      <h1>LoginScreen</h1>
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        ingresar
      </button>
    </div>
  );
};
export default LoginScreen;
