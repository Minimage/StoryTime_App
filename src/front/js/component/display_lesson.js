import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, useParams } from "react-router-dom";
import { Questions } from "./questions";
import TheProgressBar from "./progressBar";

const LessonComponent = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);
  const [myInt, setMyInt] = useState(0);
  // const [randOption2, setRandOption2] = useState(store.myOptions[ints]);
  // const [randOption3, setRandOption3] = useState(store.myOptions[ints]);
  const randOption2 = Math.floor(Math.random() * options.length);
  const randOption3 = Math.floor(Math.random() * options.length);

  console.log(randOption2, "randOption 2 new");
  console.log(randOption3, "randOption 3 new");

  // console.log(options[randOption2]?.option, "RANDOPTION 2")
  // console.log(options[randOption3]?.option, "RANDOPTION 3")

  console.log(store);

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

            <div></div>

            <div>
              <Questions index={params.question_id} />

              <div>
                <div style={{ display: "flex" }} className="card-group mt-2">
                  <div
                    style={{ order: a }}
                    className="card"
                    onClick={() => alert("That's Corret!")}
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
                  <TheProgressBar />
                </div>

                <div className="next">
                  {/* <button
                    type="button"
                    onClick={actions.loadNextLesson}
                    className="btn btn-primary btn-lg btn-block"
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