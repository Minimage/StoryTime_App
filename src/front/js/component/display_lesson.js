import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, useParams } from "react-router-dom";
import { Questions } from "./questions";
import TheProgressBar from "./progressBar";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const LessonComponent = (props) => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [prog, setProg] = useState(0);
  const [lesson1, setLesson1] = useState({});
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);

  const randOption2 = Math.floor(Math.random() * options.length);
  const randOption3 = Math.floor(Math.random() * options.length);

  console.log(randOption2, "randOption 2 new");
  console.log(randOption3, "randOption 3 new");

  console.log(store);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
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
    console.log(store.myOptions, "first useState");
  }, [store.myOptions]);
  console.log(options, "options new");

  let ints = [];
  for (let x = 0; x < store.myOptions.length; x++) {
    ints.push(x);
  }

  // useEffect(() => {
  //   console.log(store.myOptions);
  //   const firstOption = store.myOptions[ints[0]]
  //   console.log(firstOption, "this is firstOption");
  //   setRandOption2(firstOption)

  // if(firstOption.id) {
  //   let newArray = store.myOptions.filter(option => option.id != firstOption.id)
  //   setRandOption3(newArray[ints[0]])
  // }

  // }, [options]);

  // console.log(randOption2, "option2")
  // console.log(randOption3, "option3")

  let randint = store.myOptions.length;

  const randomize = (arr) => arr.sort(() => 0.5 - Math.random());

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

  console.log(data, " this is data");
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

              <div>
                <div style={{ display: "flex" }} className="card-group mt-2">
                  <div
                    style={{ order: a }}
                    className="card"
                    onClick={handleclick}
                  >
                    <h1 className="box1">{store.myOptions[1]?.option}</h1>
                    {/* <h1 className="box1">食物</h1> */}
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text">Shíwù</p> */}
                    </div>
                    <div className="Pronounciation">
                      {store.audioLink && (
                        <audio controls>
                          <source src={store.audioLink} type="audio/ogg" />
                        </audio>
                      )}
                      {/* ___________________________________________________________________________________________________________*/}
                    </div>
                  </div>

                  <div
                    style={{ order: b }}
                    className="card"
                    onClick={() => alert("try again!")}
                  >
                    <h1 className="box2">
                      {options.length > 0 && options[randOption2]?.option}
                    </h1>

                    {/* <h1 className="box2">车</h1> */}
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
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
                      {/* ___________________________________________________________________________________________________________*/}
                      {/* {console.log(store.wordLink.data)} */}
                    </div>
                  </div>

                  <div
                    style={{ order: c }}
                    className="card"
                    onClick={() => alert("try again!!")}
                  >
                    <h1 className="box3">
                      {options.length > 0 && options[randOption3]?.option}
                    </h1>
                    {/* <h1 className="box3">卫生间</h1> */}
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text">Wei sheng jian</p> */}
                    </div>
                    <div className="Pronounciation">
                      {options.length > 0 && (
                        <audio controls>
                          <source
                            src={options[randOption3]?.audio}
                            type="audio/ogg"
                          />
                        </audio>
                      )}

                      {/* ___________________________________________________________________________________________________________*/}
                    </div>
                  </div>
                </div>
                <div style={{ color: "blue", marginTop: "20px" }}>
                  {/* <h3 className="answer-alert">That is Correct!!</h3> */}
                  <div style={{ textAlign: "center" }}>
                    {/* <h2 className="progress-bar">Space for progressBar</h2> */}
                    {/* <div className="progress-bar">
                      <span style={{ width: "25%" }}></span>
                    </div> */}
                    {/* <img src="https://reactscript.com/wp-content/uploads/2016/11/Circular-Progress-Indicator-Component-For-React.png"></img> */}
                  </div>
                  {console.log(randOption2, "randOption 2 NOT FIRST")}
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
