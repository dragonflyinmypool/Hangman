import React from "react";
import "./styles.css";

const Lives = ({ lives }) => {
  let i;
  livesArray = [];

  for (i = 0; i < lives; i++) {
    livesArray.push("");
  }

  let allLives = livesArray.map(function (a) {
    return <div className="life">&#10084;</div>;
  });

  return <div className="lives">{allLives}</div>;
};

export default Lives;
