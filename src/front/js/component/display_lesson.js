import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate } from "react-router-dom";
import { Questions } from "./questions"
import TheProgressBar from "./progressBar";

const LessonComponent = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  
  console.log(store)


  useEffect(() => {
    actions.syncTokenFromSessionStore();
    if (!store.token) {
      navigate("/login");
    }
  }, []);



  return (
    <div className="background">
      <div className="mt-1">

        <div className="container-fluid">
          <div className="game-section">
            {/* Section for the games / games selection */}
          </div>
          <div>
            <h3 className="title"> Story Time Lesson 1</h3>
            <div>

            </div>
           
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
                  <div className="card" onClick={() => alert("Hello I am card one")}>
                    <h1 className="box1">食物</h1>
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">Shíwù</p>
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
                  <div className="card" onClick={() => alert("Hello I am card 2")}>
                    <h1 className="box2">车</h1>
                    {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">Chē</p>
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
                      {/* {console.log(store.wordLink.data)} */}
                    </div>


                  </div>

                  <div className="card" onClick={() => alert("Hello I am card three")}>
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
