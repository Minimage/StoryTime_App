import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
// import LessonBody from "./lesson_body";

const LessonComponent = (props) => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [prog, setProg] = useState(0);
  const [lesson1, setLesson1] = useState({});
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState({});
  const [option2, setOption2] = useState({})
  const [option3, setOption3] = useState({})

  const [audio2, setAudio2] = useState("")
  const [audio3, setAudio3] = useState("")
  const [ansAudio, setAnsAudio] = useState("")

  const answerAudio = useRef()
  const audioRef2 = useRef()
  const audioRef3 = useRef()



  const updateAudio2 = (audio) => {
    setAudio2(audio)
    if(audioRef2.current){
      // audioRef2.current.pause();
      audioRef2.current.load();
      // audioRef2.current.play();
    }
  }
  const updateAudio3 = (audio) => {
    setAudio3(audio)
    if(audioRef3.current){
      // audioRef3.current.pause();
      audioRef3.current.load();
      // audioRef3.current.play();
    }
  }

  const updateAnswerAudio = (audio) => {
    setAnsAudio(audio)
    if(answerAudio.current){
      // audioRef2.current.pause();
      answerAudio.current.load();
      // audioRef2.current.play();
    }
  }

  // useEffect(() => {
  //   updateAnswerAudio(answer[count].answer.audio)
  // }, [count])
  console.log(answer)

  useEffect(() => {
   updateAudio2(option2?.audio)
   updateAudio3(option3?.audio)
  }, [option3])

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

  useEffect(() => {
    let options_left = store.myOptions.filter((item)=> {
      if(item.option != answer[count]?.answer.option) {
        return item
      } 
      
    })
    let option_2 = options_left[Math.floor(Math.random() * options_left.length)]
    // console.log(option_2)
    setOption2(option_2)

    
    let final_options = options_left.filter((item) => {
      if(item.option != option_2.option){
        return item
      }
    })
    let option_3 = final_options[Math.floor(Math.random() * options_left.length)]
    // console.log(option_3)
    setOption3(option_3)

    updateAnswerAudio(answer[count]?.answer.audio)

  },[count])
  
  

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




  // let rand_values = ints.map((num) => {
  //   return options[num]    
  // })
  // console.log("randomized ", rand_values)

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

 
  
  console.log("this is the option2!!", option2)
  console.log("this is the option3!!", option3)

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
            {/* <LessonBody /> */}
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
                    {/* {console.log(answer[count]?.answer.option, "this is answer")} */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <div className="Pronounciation">
                      {answer[count]?.answer.audio && (
                        <audio controls ref={answerAudio}>
                          <source
                            src={ansAudio}
                            type="audio/ogg"
                            />
                            {/* {console.log(answer[count]?.answer.audio,"this answer audio")} */}
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
                      {option2?.option}
                      {/* {options[ints[1]]?.option === answer[count]?.answer.option
                        ? options[ints[4]]?.option
                        : options[ints[1]]?.option}
                        {console.log( options[ints[1]]?.option, "this is the second card")} */}
                      {/* {options.length > 0 && options[randOption2]?.option} */}
                    </h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <div className="Pronounciation">
                      
                    {options.length > 0 && (
                        <audio controls ref={audioRef2}>
                          <source
                            src={audio2}
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
                      {option3?.option}
                      {/* {options[ints[2]]?.option === answer[count]?.answer.option
                        ? options[ints[3]]?.option
                        : options[ints[2]]?.option}
                       {console.log(options[ints[2]]?.option, "this is the 3rd card")} */}
                      {/* {options.length > 0 && options[randOption3]?.option} */}
                    </h1>
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <div className="Pronounciation">
                      {options.length > 0 && (
                        <audio controls ref={audioRef3}>
                          <source
                            src={audio3}
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