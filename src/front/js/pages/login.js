import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { userContext } from "./global_context";
import axios from "axios";

import "../../styles/styles.css";
import { Context } from "../store/appContext";
// import {useNavigate} from 'react-router-dom'

export const Login = () => {
  //  useHistory is a hook that allows us to change pages
  //  and I have this bound to the onClick bellow
  let history = useNavigate();

  const navigate = useNavigate();
  // const location = useLocation();
  //________________________________________________________
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  // const history = useHistory();
  const token = sessionStorage.getItem("token");
  // console.log("This is your token", store.token)

  console.log(store);
  const handleClick = () => {
    actions.login(userName, password);
    if (store.token && store.token !== null && store.token !== undefined) {
      setUserName("");
      setPassword("");
    }
  };

  // This will run everytime the token updates but will only render what we need once the token is valid
  // or in other words this effect will run when the token is null but wont display anything as we have
  // it set to do nothing if null

  // this should probably be where i pull user info from the back since when the token changes then I can
  // also update the user info in one go

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    if (store.token) {
      navigate("/");
    }
  });

  return (
    <div className="login">
      <div>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        ></input>

        <button onClick={handleClick}>Submit</button>
      </div>

      {/* // tenanry expression working in reverse --- do not know how to solve */}
      {/* {store.token == null ? (
        `You are logged in using this token ${store.token}`
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          ></input>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>

          <button onClick={handleClick}>Submit</button>
        </div>
      )} */}
    </div>
  );
};
