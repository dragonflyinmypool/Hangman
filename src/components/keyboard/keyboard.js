import React from "react";
import "./styles.css";

const Keyboard = ({ keyboard, pickedLetters, keyClick }) => {
  let keyboardHtml = keyboard.map((a) => (
    <button onClick={keyClick.bind(a)} className="key" key={a}>
      {a}
    </button>
  ));

  return <div className="keyboard">{keyboardHtml}</div>;
};

export default Keyboard;
