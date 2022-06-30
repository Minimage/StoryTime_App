import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
import { useNavigate } from "react-router-dom";
// import {ProgressBar} from "./component/progressBar";

export const Questions = () => {

    const { store, actions } = useContext(Context)
    const [count, setCount] = useState(0);
    const [stories, setStories] = useState()



    // let x = ""
    // const handleClick = () => {
    //     x += 1
    // }

    

    const storiesText = [
        "The 食物 is delicious",    
        "The 食物 is hot",    
        "The 食物 is cold",    
        "The 食物 is missing",    
        "The 食物 is old",    
    ]

    const theQuestions = [
        "Challenge 1: Pick the word that means food",
        "Challenge 2: Pick the word that means food",
        "Challenge 3: Pick the word that means food",
        "Challenge 4: Pick the word that means food",
        "Challenge 5: Pick the word that means food",
        "Challenge Completed"
    ]


    return (
        <div>
            <h1 style= {{ textAlign: "center" }}>{storiesText[count]}</h1>
            <h1 style={{ textAlign: "center" }}>{theQuestions[count]}</h1>
            
        <div className="Next_Lesson">
            <button style= {{alignItems:"center"}} type="button" className="btn btn-primary btn-lg btn-block"
             onClick={() => setCount(count + 1)}>
                Next Lesson
            </button>
        </div>
            {/* <button
                    type="button"
                    onClick={actions.loadNextLesson}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Next Lesson
                  </button> */}

        </div>

    )


}

