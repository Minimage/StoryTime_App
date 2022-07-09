import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Hangman = () => {
  const { store, actions } = useContext(Context);
  const [words, setWords] = useState(initWords());
  // useEffect(()=>{
  //    // actions.refresh();
  //    async function initWords() {
  //     const word = await store.wordLink;
  //     return word
  //   }
  //   initWords();
  // }, []);

  async function initWords() {
    const word = await store.wordLink;
    console.log(word);
  }

  const [active, setActive] = useState(false);
  const [gameValues, setGameValues] = useState({
    cur: "",
    solution: "",
    correct: 0,
    incorrect: 0,
    total: 0,
  });

  function startGame() {
    // console.log(`these are the ${words}`);
    if (words.length > 0) {
      words.sort(() => {
        return 0.5 - Math.random();
      });
      setGameValues({
        ...gameValues,
        cur: words.shift(),
        total: 0,
        correct: 0,
        incorrect: 0,
      });
      setGameValues({
        ...gameValues,
        solution: gameValues.cur.phoneticM.split(""),
      });
      setActive(!active);
      buildBoard();
      scoreBoard();
    }
  }
  function buildBoard() {
    gameValues.solution.forEach((Let) => {
      if (Let === "") {
        return <div className="curColor"></div>;
      } else {
        setGameValues(gameValues.total++);
        return (
          <div letter={Let} className="boxE">
            '-'
          </div>
        );
      }
    });
    for (let i = 0; i < 26; i++) {
      let temp = String.fromCharCode(65 + i);
      return <div className="box">{temp}</div>;
      let checker = function (e) {
        checkLetters(temp);
        console.log(e);
        console.log(temp);
      };
    }
  }
  return (
    <div>
      <div className="gameArea">
        {active && <div className="score"></div>}
        <div className="hiddenWord">{}</div>
        {active && <div className="letters"></div>}
        {!active && <button onClick={startGame}>Start</button>}
      </div>
    </div>
  );
};
export default Hangman;
