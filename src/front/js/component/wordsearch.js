import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export default function WordSearch() {
  const { store, actions } = useContext(Context);
  const [words, setWords] = useState(store.wordLink);
  const [active, setActive] = useState(false);
  const [gameValues, setGameValues] = useState({
    r: 5,
    c: 5,
    w: 25,
    x: "",
    y: "",
    arr: [],
  });

  return (
    <div>
      <div className="gameArea">
        <div className="gridContainer"></div>
        <div className="myList"></div>
        <button></button>
        <input />
      </div>
    </div>
  );
}
