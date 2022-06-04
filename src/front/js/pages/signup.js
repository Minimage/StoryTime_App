import React, { useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "./global_context";

export const Signup = () => {
  const navagate = useNavigate();
  const { auth, setAuth } = useContext(userContext);

  useEffect(() => {
    if (auth === true) {
      navagate("/");
    }
  });

  return <div className="signup"></div>;
};
