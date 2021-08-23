import React, { useState } from "react";
import PropTypes from "prop-types";
const CounterApp = ({ valsito }) => {
  const [val, setVal] = useState(valsito);
  return (
    <>
      <h1>{val}</h1>
      <p>papapap</p>
      <button
        onClick={() => {
          setVal((c) => c + 1);
        }}
      >
        Presiona pa sumar 1
      </button>
      <button
        onClick={() => {
          setVal((c) => c - 1);
        }}
      >
        Presiona pa restar 1
      </button>
      <button
        onClick={() => {
          setVal(valsito);
        }}
      >
        Presiona pa resetear
      </button>
    </>
  );
};

CounterApp.propTypes = { valsito: PropTypes.number };
export default CounterApp;
