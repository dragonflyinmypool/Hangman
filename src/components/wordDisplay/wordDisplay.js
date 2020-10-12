import React from "react";
import "./styles.css";

const wordDisplay = ({ currentWord, correctLetters }) => {
  let currentWordOne = currentWord.split("");

  let display = currentWordOne.map((a) => <div className="letter"></div>);

  return <div className="display">{display}</div>;
};

export default wordDisplay;
