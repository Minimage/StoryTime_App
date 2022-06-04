import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.production.min";
import { userContext } from "./global_context";

export const Signup = () => {
  const navagate = useNavigate();
  const { auth, setAuth } = useContext(userContext);

  if (auth) {
    return <Navigate to={"/"} />;
  } else {
    return <div className="signup"></div>;
  }
};
