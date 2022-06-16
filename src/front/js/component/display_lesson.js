import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";

const LessonComponent = () => {
    const { store, actions } = useContext(Context);

    return (
    <div className="mt-5">
        <h1>{store.current_lesson.name}</h1>
        <button className="next" onClick={actions.loadNextLesson}>Next</button>
    </div>)
}

export default LessonComponent;