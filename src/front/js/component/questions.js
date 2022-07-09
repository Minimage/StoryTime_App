import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, Link } from "react-router-dom";
// import {ProgressBar} from "./component/progressBar";

export const Questions = (props) => {
  const { store, actions } = useContext(Context);
  const [count, setCount] = useState(0);
  const [stories, setStories] = useState();
  const [lesson1, setLesson1] = useState({});

  // console.log(store.myQuestion[props.index])
  const data = store.myQuestion[props.index];

  useEffect(() => {
    let firstLesson = store.myQuestion.filter((item) => item.lessons == 1);
    setLesson1(firstLesson);
  }, [store.myQuestion]);

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>{data && data.lesson_para}</h1>
      <h1 style={{ textAlign: "center" }}>{data && data.question}</h1> */}
      {/* <h1 style={{ textAlign: "center" }}>{theQuestions[count]}</h1> */}

      <div className="Next_Lesson">
        <Link to={`/display_lesson/${parseInt(props.index) + 1}`}>
          <button
            style={{ alignItems: "center" }}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Next Lesson
          </button>
        </Link>
      </div>
    </div>
  );
};
