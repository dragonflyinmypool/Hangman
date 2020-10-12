import React from "react";
import "./styles.css";

const Keyboard = ({ keyboard, pickedLetters, keyClick }) => {
  let updatedKeyboard = keyboard.map(function (a) {
    let b;

    if (pickedLetters.includes(a)) {
      b = "";
    } else {
      b = a;
    }
    return b;
  });
  console.log(updatedKeyboard);
  let keyboardHtml = updatedKeyboard.map((a, b) => (
    <button onClick={keyClick.bind(a)} className="key" key={b}>
      {a}
    </button>
  ));

  return <div className="keyboard">{keyboardHtml}</div>;
};

export default Keyboard;
