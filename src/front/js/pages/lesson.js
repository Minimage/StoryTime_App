import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import LessonComponent from "../component/display_lesson";

export const Lesson = () => {
  const { actions, store } = useContext(Context);
  console.log(store.current_lesson);
  useEffect(() => {
    actions.initializeLesson();
  }, []);

  return <LessonComponent />;
};
