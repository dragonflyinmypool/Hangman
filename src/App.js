import React, { useState } from "react";
import "./styles.css";
import WordDisplay from "./components/wordDisplay/wordDisplay.js";
import Keyboard from "./components/keyboard/keyboard.js";
import LivesDisplay from "./components/livesDisplay/livesDisplay.js";
import Menu from "./components/menu/menu.js";

const keyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const guessWords = ["UNITED KINGDOM", "JAPAN"];

export default function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [pickedLetters, setPickedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [lives, setLives] = useState([5]);
  const [currentWord, setCurrentWord] = useState(
    guessWords[Math.floor(Math.random() * guessWords.length)]
  );

  // NEW GAME
  function newGame() {
    setCorrectLetters([]);
    setPickedLetters([]);
    setWrongLetters([]);
    setLives([5]);
    setCurrentWord(guessWords[Math.floor(Math.random() * guessWords.length)]);
  }

  // GAME PLAY
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

  // Check for game over
  function checkLives() {
    if (wrongLetters.length > lives) {
      console.log("the game is over");
      newGame();
    }
  }

  function keyClick() {
    goThroughLetters(this);
    checkLives();
  }

  return (
    <div className="App">
      <WordDisplay currentWord={currentWord} correctLetters={correctLetters} />
      <Keyboard
        keyboard={keyboard}
        pickedLetters={pickedLetters}
        keyClick={keyClick}
      />
      <LivesDisplay lives={lives} />
      <Menu newGame={newGame} />
    </div>
  );
}
