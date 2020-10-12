import React from "react";
import "./styles.css";

const Lives = ({ lives }) => {
  let i;
  livesArray = [];

  for (i = 0; i < lives; i++) {
    livesArray.push("");
  }

  let allLives = livesArray.map(function (a) {
    return <div>&#10084;</div>;
  });

  return <div className="keyboard">{allLives}</div>;
};

export default Lives;
