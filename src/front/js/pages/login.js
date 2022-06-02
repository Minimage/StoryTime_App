import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./global_context";

export const Login = () => {
  //  useHistory is a hook that allows us to change pages
  //  and I have this bound to the onClick bellow
  let history = useNavigate();

  const { auth, setAuth } = useContext(userContext);

  return (
    <div>
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>
      <button
        onClick={() => {
          setAuth(true);
          history.push("/user/1");
        }}
      >
        Submit
      </button>
    </div>
  );
};
