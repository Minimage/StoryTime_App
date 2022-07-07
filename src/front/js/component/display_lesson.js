import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate } from "react-router-dom";
import { Questions } from "./questions";
import TheProgressBar from "./progressBar";

const LessonComponent = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [count, setCount] = useState(0);
  const audioRef = useRef();
  const [audio1, setAudio1] = useState();

  let word1 = store.myLesson1[0]?.word;

  console.log(store.myLesson1);

  let ints = [];
  for (let x = 0; x < store.myLesson1.length; x++) {
    ints.push(x);
  }

  let randint = store.myLesson1.length;

  const randomize = (arr) => arr.sort(() => 0.5 - Math.random());

  let result1 = Math.floor(Math.random() * randint) + 1;
  let result2 = Math.floor(Math.random() * randint) + 1;
  let result3 = Math.floor(Math.random() * randint) + 1;

  //randomizes the ints array
  useEffect(() => {
    randomize(ints);
  }, []);

  let holdints = [];
  for (let i = 0; i < 5; i++) {
    holdints.push(ints[i]);
  }

  console.log(holdints, " Holdints !!!");

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    actions.getPinyin();
    actions.getPinyin2();
    actions.getLesson1();
    actions.getAudio("word");

    if (!store.token) {
      navigate("/login");
    }
  }, []);

  //  Sends the word to the getPinyin function in the session store
  useEffect(() => {
    // console.log(store.myLesson1[0]?.word);
    actions.getPinyin(store.myLesson1[count]?.word);
    console.log(store.myLesson1[1]?.word, "this is the word");
  }, [store.myLesson1]);

  //  Pulls back the word from getPinyin from the session store and appends it to myAudio
  useEffect(() => {
    setAudio1(store.myAudio?.data?.url);
  }, [store.myAudio]);

  const handleClick = () => {
    console.log("Im here");
  };

  const updateSong = (audio1) => {
    setAudio1(source);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="background">
      <div className="mt-1">
        <div className="container-fluid">
          <div className="game-section">
            {/* Section for the games / games selection */}
          </div>
          <div>
            <h3 className="title"> Story Time Lesson 1</h3>
            <div></div>

            {/* <h1>{store.wordLink?.data?.mandarin}</h1>
            <h1>{store.wordLink?.data?.phoneticM}</h1> */}

            {/* {store.wordLink.map((item,index) => {
              return (
              <div>
                
              <div>
             {item.mandarin}
             </div>
             <div>
            {item.phoneticM}
             </div>
              </div>
              )
            })}  */}

            {/* <h1>Stories /Lesson</h1> */}

            <div>
              <Questions />

              <div>
                <div className="card-group mt-2">
                  <div
                    className="card"
                    onClick={() => alert("Hello I am card one")}
                  >
                    <h1 className="box1">{store.myLesson1[count]?.mandarin}</h1>
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">
                        {store.myLesson1[holdints[count]]?.phoneticM}
                      </p>
                    </div>
                    <div className="Pronounciation">
                      {store.myAudio?.data?.url && (
                        <audio onPlay={handleClick} controls>
                          <source
                            src={store.myAudio?.data?.url}
                            type="audio/ogg"
                          />
                        </audio>
                      )}
                      {console.log(store.audioLink.audio)}

                      {/* ___________________________________________________________________________________________________________*/}
                    </div>
                  </div>
                  <div
                    className="card"
                    onClick={() => alert("Hello I am card 2")}
                  >
                    <h1 className="box2">{store.myLesson1[1]?.mandarin}</h1>
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">
                        {store.myLesson1[1]?.phoneticM}
                      </p>
                    </div>
                    <div className="Pronounciation">
                      {store.myAudio?.data?.url && (
                        <audio controls>
                          <source
                            src={store.myAudio?.data?.url}
                            type="audio/ogg"
                          />
                        </audio>
                      )}
                      {/* ___________________________________________________________________________________________________________*/}
                      {/* {console.log(store.wordLink.data)} */}
                    </div>
                  </div>

                  <div
                    className="card"
                    onClick={() => alert("Hello I am card three")}
                  >
                    <h1 className="box3">卫生间</h1>
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">Wei sheng jian</p>
                    </div>
                    <div className="Pronounciation">
                      {store.audioLink.audio && (
                        <audio controls>
                          <source
                            src={store.audioLink.audio}
                            type="audio/ogg"
                          />
                        </audio>
                      )}
                      {/* ___________________________________________________________________________________________________________*/}
                    </div>
                  </div>
                </div>
                <div style={{ color: "blue", marginTop: "20px" }}>
                  <button
                    onClick={() => {
                      alert("this is correct");
                      setCount(count + 1);
                      actions.getPinyin(store.myLesson1[count]?.word);
                      console.log(
                        actions.getPinyin(store.myLesson1[count]?.word)
                      );
                      // setAudio1(console.log(store.myAudio?.data?.url));
                      console.log(audio1, "look here bro");
                    }}
                    href="#"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </button>
                  <h3 className="answer-alert">That is Correct!!</h3>
                  <div style={{ textAlign: "center" }}>
                    {/* <h2 className="progress-bar">Space for progressBar</h2> */}
                    <div className="progress-bar">
                      <span style={{ width: "25%" }}></span>
                    </div>
                    {/* <img src="https://reactscript.com/wp-content/uploads/2016/11/Circular-Progress-Indicator-Component-For-React.png"></img> */}

                    <TheProgressBar />
                  </div>
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
