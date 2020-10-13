import React from "react";
import "./styles.css";

const wordDisplay = ({ currentWord, correctLetters }) => {
  let currentWordOne = currentWord.split("");
  let toDisplay = currentWordOne.map(function (a, i) {
    let letter;

    if (correctLetters.includes(a)) {
      letter = a;
    } else {
      letter = "";
    }
    return letter;
  });

  let display = toDisplay.map((a, i) => (
    <div className="letter" key={i}>
      {a}
    </div>
  ));

  return <div className="display">{display}</div>;
};

export default wordDisplay;
