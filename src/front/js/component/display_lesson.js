import React, { useContext } from "react";
import { Context } from "../store/appContext";

const LessonComponent = () => {
    const { store, actions } = useContext(Context);

    return (<div>
        <h1>{store.current_lesson.name}</h1>
        <button onClick={actions.loadNextLesson}>Next</button>
    </div>)
}

export default LessonComponent;