import React, { useEffect, useContext, useState } from "react";
import { Navigate, useNavigate, Link} from "react-router-dom";
import { userContext } from "./global_context";
import { Context } from "../store/appContext"
import "../../styles/signup.css";


export const Signup = () => {
  const navagate = useNavigate();
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  // let history = useHistory();

  console.log(firstName)
  useEffect(() => {
    if (auth === true) {
      navagate("/");
    }
  });

  //_____________________________________________________________________
  return (
    <div className="container-fluid" id="signup_form">
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" onChange={(e) => {
          setFirstName(e.target.value)
        }} />

        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" onChange={(e) => {
          setLastName(e.target.value)
        }} />

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={(e) => {
          setEmail(e.target.value)
        }} />

        <input type="text" placeholder="Username" onChange={(e) => {
          setUserName(e.target.value)
        }}></input>
        <input type="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
        <Link to="/login">
          <input type="submit" value="Submit" onClick={() => {
            actions.createUser(firstName, lastName, email, userName, password)
        }
          } />
        </Link>
      </form>
    </div>
  );
  //_____________________________________________________________________
};
