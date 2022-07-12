import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, useParams, Link } from "react-router-dom";
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
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    setAnswer(store.myQuestion);
  }, [store.myQuestion]);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    actions.myData();
    actions.getQuestions();
    actions.getOptions();

    if (!store.token) {
      navigate("/login");
    }
  }, [store.token]);

  useEffect(() => {
    setOptions(store.myOptions);
  }, [store.myOptions]);

  let ints = [];
  // console.log(store.myOptions, "myQuestion");
  for (let x = 0; x < store.myOptions.length; x++) {
    ints.push(x);
    // console.log("this is x ", x);
  }

  let randint = store.myOptions.length;

  const randomize = (arr) => arr.sort(() => 0.5 - Math.random());
  randomize(ints);
  // console.log("randomized ", ints);

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
  }, [store.myQuestion]);

  //this is to stop dupications within the cards
  if (
    options[randOption2]?.option === answer[count]?.answer.option ||
    options[randOption2]?.option === options[randOption3]?.option
  ) {
    // options[randOption2]?.option
    // setOptions(options[randOption2]?.option)
  }

  if (
    options[randOption3]?.option === answer[count]?.answer.option ||
    options[randOption3]?.option === options[randOption2]?.option
  ) {
    // options[randOption3]?.option
    // setOptions(options[randOption3]?.option)
  }

  return (
    <div className="background">
      <div className="mt-1">
        <div className="container-fluid">
          <div className="game-section"></div>
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
              <div>
                <div
                  style={{ display: "flex" }}
                  className="card-group mt-2 Question-holder"
                >
                  <div
                    style={{ order: a }}
                    className="card"
                    onClick={handleclick}
                  >
                    <h1 className="box1">{answer[count]?.answer.option}</h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <div className="Pronounciation">
                      {answer[count]?.answer.audio && (
                        <audio controls>
                          <source
                            src={answer[count]?.answer.audio}
                            type="audio/ogg"
                          />
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
                      {options[ints[1]]?.option === answer[count]?.answer.option
                        ? options[ints[4]]?.option
                        : options[ints[1]]?.option}
                      {/* {options.length > 0 && options[randOption2]?.option} */}
                    </h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
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
                      {options[ints[2]]?.option === answer[count]?.answer.option
                        ? options[ints[3]]?.option
                        : options[ints[2]]?.option}

                      {/* {options.length > 0 && options[randOption3]?.option} */}
                    </h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
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
                  <div style={{ textAlign: "center" }}></div>

                  <ProgressBar
                    completed={prog}
                    labelColor="white"
                    bgColor="blue"
                    animateOnRender
                  />
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
