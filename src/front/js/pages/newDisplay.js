import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const NewDisplay = () => {
  const { store, actions } = useContext(Context);

  const [answer, setAnswer] = useState([]);
  const [option, setOption] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    actions.myData();
    actions.getQuestions();
    actions.getOptions();

    if (!store.token) {
      navigate("/login");
    }
  }, [store.token]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  var arr = [];

  return <div className="box"></div>;
};
