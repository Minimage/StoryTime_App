import React, { useState, useEffect, useContext } from "react";
import "../../styles/modal.css";
import "../../styles/hangmen.css";

export default function Hangmen() {
  const [modal, setModal] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const word = "hangman".toUpperCase();
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

  const maskedWord = word
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");
  return (
    <div>
      <div className={"container"}>
        <button onClick={open}>Open</button>
      </div>
      <div className={modal && "modal" ? " is-open" : "modal"}>
        <p className="boxE">{maskedWord}</p>

        {alphabet.map((alphabet, index) => (
          <div
            className="boxD"
            key={index}
            onClick={() => {
              if (word.includes(alphabet)) {
                setCorrectGuesses([...correctGuesses, alphabet]);
              }
            }}
          >
            {alphabet}
          </div>
        ))}
        {!maskedWord.includes("_") && <p>You won!</p>}
        <button onClick={open}>close</button>
      </div>
    </div>
  );
}
