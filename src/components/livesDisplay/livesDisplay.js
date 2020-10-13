import React from "react";
import "./styles.css";

const Lives = ({ lives }) => {
  let i;
  let livesArray = [];

  for (i = 0; i < lives; i++) {
    livesArray.push("");
  }

  let allLives = livesArray.map(function (a, i) {
    return (
      <div className="life" key={i}>
        &#10084;
      </div>
    );
  });

  return <div className="lives">{allLives}</div>;
};

export default Lives;
