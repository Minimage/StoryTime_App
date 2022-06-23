import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Context } from "../store/appContext";
import LessonComponent from "../component/display_lesson";
import { userContext } from "./global_context";

export const Lesson = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // useEffect(() => {
  //   actions.initializeLesson();
  // }, []);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    if (!store.token) {
      navigate("/login");
    }
  });

  return (
    <div className="Lesson">
      <div>
        <h1>lessons page</h1>
      </div>
    </div>
  );
};
