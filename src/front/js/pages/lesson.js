import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import LessonComponent from '../component/display_lesson';

const Lesson = () => {
    const { actions } = useContext(Context);

    useEffect(() => {
        actions.initializeLesson();
    })

    return (
        <LessonComponent />
    )
}

export default Lesson;