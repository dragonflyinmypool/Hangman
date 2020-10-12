import React from "react";
import "./styles.css";

const wordDisplay = ({ currentWord, correctLetters }) => {
  let currentWordOne = currentWord.split("");
  let toDisplay = currentWordOne.map(function (a, i) {
    let letter;
    console.log(a);
    if (a === correctLetters[i]) {
      letter = a;
    } else {
      letter = "";
    }
    return letter;
  });

  let display = toDisplay.map((a) => <div className="letter">{a}</div>);

  return <div className="display">{display}</div>;
};

export default wordDisplay;
