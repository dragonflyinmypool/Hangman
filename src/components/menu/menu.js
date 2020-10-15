import React from "react";
import "./styles.css";

const Menu = ({ buttons }) => {
  return (
    <div>
      <button className="menuButtons">New Game</button>
      <button className="menuButtons">Show Word</button>
      <button className="menuButtons">Reveal Letter</button>
    </div>
  );
};

export default Menu;
