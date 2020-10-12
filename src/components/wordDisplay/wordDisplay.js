import React from "react";
import "./styles.css";

const wordDisplay = ({ currentWord, correctLetters }) => {
  return <div className="keyboard">{currentWord}</div>;
};

export default wordDisplay;
