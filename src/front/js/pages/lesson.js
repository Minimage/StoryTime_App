import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import LessonComponent from "../component/display_lesson";
import { userContext } from "./global_context";

export const Lesson = () => {
  const { auth, setAuth } = useContext(userContext);
  const { actions, store } = useContext(Context);
  const navagate = useNavigate();

  console.log(store.current_lesson);
  useEffect(() => {
    actions.initializeLesson();
  }, []);

  if (!auth) {
    return <Navigate to={"/Login"} />;
  }
  return <LessonComponent />;
};
