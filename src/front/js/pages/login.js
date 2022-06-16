import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { userContext } from "./global_context";
import { Helmet } from "react-helmet";
import "../../styles/styles.css";
import { Context } from "../store/appContext"
// import {useNavigate} from 'react-router-dom'

export const Login = () => {
  //  useHistory is a hook that allows us to change pages
  //  and I have this bound to the onClick bellow
  // let history = useNavigate();
 

  const { auth, setAuth } = useContext(userContext);
  const navagate = useNavigate();
  const location = useLocation();
  //________________________________________________________
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { store, actions } = useContext(Context);
  // const history = useHistory();



  return (
    <div className="login">
      <input type="text" placeholder="Username" onChange={(e) => {
        setUserName(e.target.value)
      }} required></input>
      <input type="password" placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }} required></input>


      <button
        onClick={() => {
          if (userName == "" && password == "") {
            alert("email and password cannot be empty")
          }
          else {
            actions.login(userName, password)
            navagate("/lesson")
          }
          actions.login(userName, password)
          // setAuth(true);
          // if (location.state?.from) {
          //   navagate(location.state.from);
          // } else {
          //   history("/");
          // }
        }}
      >
        Submit
      </button>

    </div>
  );
};
