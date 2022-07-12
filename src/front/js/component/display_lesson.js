import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, useParams } from "react-router-dom";
import { Questions } from "./questions";
import TheProgressBar from "./progressBar";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { AudioPlayerProvider } from "react-use-audio-player";
import { FaBeer } from "react-icons/fa";
import ReactLogo from "../../img/alans-storytime-logo.svg";

const LessonComponent = (props) => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [prog, setProg] = useState(0);
  const [lesson1, setLesson1] = useState({});
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [myAudio, setMyAudio] = useState();

  const [myInt, setMyInt] = useState(0);
  const randOption2 = Math.floor(Math.random() * options.length);
  const randOption3 = Math.floor(Math.random() * options.length);

  // console.log(randOption2, "randOption 2 new");
  // console.log(randOption3, "randOption 3 new");

  console.log(store);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    actions.myData();
    actions.getQuestions();
    actions.getOptions();

    if (!store.token) {
      navigate("/login");
    }
  }, [store.token]),
    useEffect(() => {
      actions.syncTokenFromSessionStore();
      actions.myData();
      actions.getQuestions();
      actions.getOptions();

      // actions.getWords()

      if (!store.token) {
        navigate("/login");
      }
    }, []);

  useEffect(() => {
    setOptions(store.myOptions);
    setMyAudio(store.myOptions[count]?.audio);
    console.log(myAudio);
  }, [store.myOptions]);
  // console.log(options, "options new");

  let ints = [];
  console.log(store.myOptions, "myQuestion");
  for (let x = 0; x < store.myOptions.length; x++) {
    ints.push(x);
    // console.log("this is x ", x);
  }
  // console.log(randOption2, "option2")
  // console.log(randOption3, "option3")

  let randint = store.myOptions.length;

  const randomize = (arr) => arr.sort(() => 0.5 - Math.random());
  randomize(ints);
  console.log("randomized ", ints);

  let result1 = Math.floor(Math.random() * randint) + 1;
  let result2 = Math.floor(Math.random() * randint) + 1;
  let result3 = Math.floor(Math.random() * randint) + 1;

  let randomPos = randomize(ints);
  const n = 3;
  const arr = [];

  const lengthOfMyQuestion = store.myQuestion.length;

  if (n === 0) {
    console.log(null);
  }

  do {
    // Generating random number
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Pushing into the array only
    // if the array does not contain it
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  } while (arr.length < n);

  let a = arr[0];
  let b = arr[1];
  let c = arr[2];

  const lessons_length = Object.keys(store.myQuestion).length;
  let increment = 100 / lessons_length;

  let handleclick = () => {
    setProg(prog + increment);
    <Link to={`/display_lesson/${parseInt(props.index) + 1}`} />;
    setCount(count + 1);
    if (count === lengthOfMyQuestion - 1) {
      navigate("/ratings");
    }
  };

  let audio = new Audio(myAudio);

  const start = () => {
    audio.play();
  };

  useEffect(() => {
    if (prog > 100) {
      setProg(100);
    }
  }, [prog]);

  const data = store.myQuestion[props.index];

  useEffect(() => {
    let firstLesson = store.myQuestion.filter((item) => item.lessons == 1);
    setLesson1(firstLesson);
    console.log(firstLesson, "firstLesson");
  }, [store.myQuestion]);

  return (
    <div className="background">
      <div className="mt-1">
        <div className="container-fluid">
          <div className="game-section">
            {/* Section for the games / games selection */}
          </div>
          <div>
            <h3 className="mt-1">
              Welcome to Story Time {store.userdata.first_name}
            </h3>
            <h3 className="lesson_title">Lesson 1</h3>

            <div>
              <h1 style={{ textAlign: "center" }}>
                {lesson1[count]?.lesson_para}
              </h1>
              <h1 style={{ textAlign: "center" }}>
                {lesson1[count]?.question}
              </h1>
            </div>

            <div>
              {/* <Questions index={params.question_id} /> */}

              <div className="answers">
                <div style={{ display: "flex" }} className="card-group mt-2">
                  <div
                    style={{ order: a }}
                    className="card"
                    onClick={handleclick}
                  >
                    <h1 className="box1">{store.myOptions[1]?.option}</h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text">Shíwù</p> */}
                    </div>
                    <div className="Pronounciation">
                      {options.length > 0 && (
                        <audio controls>
                          <source src={myAudio} type="audio/mp3" />
                        </audio>
                      )}
                    </div>
                  </div>

                  <div
                    style={{ order: b }}
                    className="card"
                    onClick={() => alert("try again!")}
                  >
                    <h1 className="box2">
                      {options[ints[1]]?.option === "食物 Shíwù"
                        ? options[ints[4]]?.option
                        : options[ints[1]]?.option}
                    </h1>

                    {/* <h1 className="box2">车</h1> */}

                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text">Chē</p> */}
                    </div>
                    <div className="Pronounciation">
                      {options.length > 0 && (
                        <audio controls>
                          <source
                            src={options[randOption2]?.audio}
                            type="audio/ogg"
                          />
                        </audio>
                      )}
                    </div>
                  </div>

                  <div
                    style={{ order: c }}
                    className="card"
                    onClick={() => alert("try again!!")}
                  >
                    <h1 className="box3">
                      {options[ints[2]]?.option === "食物 Shíwù"
                        ? options[ints[3]]?.option
                        : options[ints[2]]?.option}
                    </h1>
                    {/* <h1 className="box3">卫生间</h1> */}

                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text">Wei sheng jian</p> */}
                    </div>
                    <div className="Pronounciation">
                      {options.length > 0 && (
                        <audio controls>
                          <source
                            src={myAudio ? myAudio : "none"}
                            type="audio/mp3"
                          />
                        </audio>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ color: "blue", marginTop: "20px" }}>
                  {/* <h3 className="answer-alert">That is Correct!!</h3> */}
                  <div style={{ textAlign: "center" }}></div>
                  {/* {console.log(randOption2, "randOption 2 NOT FIRST")}
                  {console.log(randOption3, "randOption 3 NOT FIRST")}
                  {console.log(options[randOption2]?.audio, "this is audio2")}
                  {console.log(options[randOption3]?.audio, "this is audio3")}
                </div>

                <div className="next">
                  {/* <button
                    type="button"
                    onClick={actions.loadNextLesson}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Next Lesson
                  </button> */}
                  <button onClick={start}>Play</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"
                      fill="rgba(52,72,94,1)"
                    />
                  </svg>

                  <img src={ReactLogo} />

                  <ProgressBar
                    completed={prog.toFixed(2)}
                    labelColor="white"
                    bgColor="blue"
                    animateOnRender
                  />

                  {/* Keeping this as it has a turnary for when the progress bar is 100%*/}
                  {/* <button
                    className={prog >= 100 ? "hide" : ""}
                    onClick={handleclick}
                  >
                    Next Lesson
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
