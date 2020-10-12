export function goThroughLetters(a, currentWord, correctLetters, wrongLetters) {
  if (currentWord.includes(a[0]) && !correctLetters.includes(a[0])) {
    const newlist = correctLetters.concat(a[0]);
    setCorrectLetters(newlist);
  } else if (!currentWord.includes(a[0]) && !wrongLetters.includes(a[0])) {
    const newlist = wrongLetters.concat(a[0]);
    setWrongLetters(newlist);
  }
}
