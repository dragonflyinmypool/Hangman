import React, { useState } from "react";
import "./styles.css";
import WordDisplay from "./components/wordDisplay/wordDisplay.js";
import Keyboard from "./components/keyboard/keyboard.js";
import LivesDisplay from "./components/livesDisplay/livesDisplay.js";

const guessWords = ["FRANCE", "JAPAN"];
let currentWord = [];
currentWord = guessWords[Math.floor(Math.random() * guessWords.length)];
const keyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [pickedLetters, setPickedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [lives, setLives] = useState([10]);

  function goThroughLetters(a) {
    if (currentWord.includes(a[0]) && !correctLetters.includes(a[0])) {
      const newlist = correctLetters.concat(a[0]);
      setCorrectLetters(newlist);
    } else if (!currentWord.includes(a[0]) && !wrongLetters.includes(a[0])) {
      const newlist = wrongLetters.concat(a[0]);
      setWrongLetters(newlist);
      const newLives = lives - 1;
      setLives(newLives);
    }

    if (!pickedLetters.includes(a[0])) {
      const pickedLetter = pickedLetters.concat(a[0]);
      setPickedLetters(pickedLetter);
    }
  }

  function keyClick() {
    goThroughLetters(this);
    checkLives();
  }

  function checkLives() {
    if (wrongLetters.length > lives) {
      console.log("the game is over");
    }
  }

  return (
    <div className="App">
      <h3>HANGMAN</h3>
      <WordDisplay currentWord={currentWord} correctLetters={correctLetters} />
      <Keyboard
        keyboard={keyboard}
        pickedLetters={pickedLetters}
        keyClick={keyClick}
      />
      <LivesDisplay lives={lives} />
    </div>
  );
}
