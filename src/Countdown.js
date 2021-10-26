import React from "react";
import { useState } from "react";
import "./style.css";

function Countdown() {
  // let value = 1;
  const [num, setNum] = useState(1);
  function increase() {
    setNum((value) => (value = value + 1));
  }
  function decrease() {
    setNum((value) => (value = value - 1));
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Countdown;
