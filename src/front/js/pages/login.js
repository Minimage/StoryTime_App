import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { userContext } from "./global_context";
import { Helmet } from "react-helmet";
import "../../styles/styles.css";

export const Login = () => {
  //  useHistory is a hook that allows us to change pages
  //  and I have this bound to the onClick bellow
  let history = useNavigate();

  const { auth, setAuth } = useContext(userContext);
  const navagate = useNavigate();
  const location = useLocation();

  return (
    <div className="login">
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>

      <button
        onClick={() => {
          setAuth(true);
          if (location.state?.from) {
            navagate(location.state.from);
          } else {
            history("/");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};
