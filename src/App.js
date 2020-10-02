import React, { useState } from "react";
import "./styles.css";
import WordDisplay from "./components/wordDisplay/wordDisplay.js";
import Keyboard from "./components/keyboard/keyboard.js";

const guessWords = ["FRANCE", "JAPAN", "UKRAINE", "COLOMBIA"];
let currentWord = guessWords[Math.floor(Math.random() * guessWords.length)];
const keyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lives = 5;

export default function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [pickedLetters, setPickedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  function keyClick() {
    goThroughLetters(this);
    checkLives();
  }

  function goThroughLetters(a) {
    if (currentWord.includes(a[0]) && !correctLetters.includes(a[0])) {
      const newlist = correctLetters.concat(a[0]);
      setCorrectLetters(newlist);
    } else if (!currentWord.includes(a[0]) && !wrongLetters.includes(a[0])) {
      const newlist = wrongLetters.concat(a[0]);
      setWrongLetters(newlist);
    }
    console.log(wrongLetters);
  }

  function checkLives() {
    if (wrongLetters.length > lives) {
      console.log("the game is over");
    }
  }

  return (
    <div className="App">
      <h3>HANGMAN</h3>
      {/* <WordDisplay currentWord={currentWord} correctLetters={correctLetters} />
      <Keyboard
        keyboard={keyboard}
        pickedLetters={pickedLetters}
        keyClick={keyClick}
      /> */}
    </div>
  );
}
