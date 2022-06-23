import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Context } from "../store/appContext";
import LessonComponent from "../component/display_lesson";
import { userContext } from "./global_context";

export const Lesson = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  console.log(store.current_lesson);
  // useEffect(() => {
  //   actions.initializeLesson();
  // }, []);

  return (
    <div className="Lesson">
      {store.token && store.token !== null && store.token !== undefined ? (
        <div>
          <h1>lessons page</h1>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};
