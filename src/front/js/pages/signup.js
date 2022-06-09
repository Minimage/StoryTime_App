import React, { useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "./global_context";
import "../../styles/signup.css";

export const Signup = () => {
  const navagate = useNavigate();
  const { auth, setAuth } = useContext(userContext);

  useEffect(() => {
    if (auth === true) {
      navagate("/");
    }
  });

  //_____________________________________________________________________
  return (

    <div className="signup_form">

    <form action="/action_page.php" method="get">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/>
      <input type="submit" value="Submit"/>
    </form> 

    <input type="text" placeholder="Username"></input>
    <input type="text" placeholder="Password"></input>

    </div>

  )
  //_____________________________________________________________________
        
};
