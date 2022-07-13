import React, { useState, useEffect, useContext } from "react";
import "../../styles/modal.css";
import "../../styles/hangmen.css";

export default function Hangmen() {
  const [modal, setModal] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [maskedWord, setMaskedWord] = useState("");
  const [activated, setActivated] = useState(false);
  const [word, setWord] = useState("");
  // const word = "hangman".toUpperCase();

  let vocab = ["tea", "soda", "coffee", "milk"];

  console.log(maskedWord);

  useEffect(() => {
    startGame();
  }, []);
  useEffect(() => {
    let x = word
      .split("")
      .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
      .join(" ");
    console.log(x);
  }, [correctGuesses, incorrectGuesses]);
  console.log(word);
  console.log(correctGuesses);
  function startGame() {
    if (vocab.length > 0) {
      vocab.sort(() => {
        return 0.5 - Math.random();
      });
      console.log(vocab);
      let mixWord = vocab.shift();
      setWord(mixWord);
      setMaskedWord(
        mixWord
          .split("")
          .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
          .join(" ")
      );
    }
  }

  function gameOver() {
    if (vocab.length > 0) {
    }
  }
  function open() {
    setModal(!modal);
  }
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  function buildKeys() {
    if (word.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet]);
      console.log(word);
    } else if (!word.includes(alphabet)) {
      setIncorrectGuesses([...incorrectGuesses, alphabet]);
    }
  }

  return (
    <div>
      <div className={"container"}>
        <button onClick={open}>Open</button>
      </div>
      <div className={modal && "modal" ? " is-open" : "modal"}>
        {word.length +
          " letters " +
          correctGuesses.length +
          " found " +
          incorrectGuesses.length +
          " missed"}
        <p className="boxE">{maskedWord}</p>

        {alphabet.map((alphabet, index) => {
          const [gray, setGray] = useState(false);
          return (
            <div
              className={gray ? "inactive" : "boxD"}
              key={index}
              onClick={() => {
                setGray(true);
                if (word.includes(alphabet)) {
                  setCorrectGuesses([...correctGuesses, alphabet]);
                } else if (!word.includes(alphabet)) {
                  setIncorrectGuesses([...incorrectGuesses, alphabet]);
                }
              }}
            >
              {alphabet}
            </div>
          );
        })}
        {!maskedWord.includes("_") && <p>You won!</p>}
        <button onClick={open}>close</button>
      </div>
    </div>
  );
}
