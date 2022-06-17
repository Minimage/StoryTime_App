import React, { useEffect, useContext, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { userContext } from "./global_context";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const navagate = useNavigate();
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //  The beginner checkbox will be checked on the initial state and the user will need to change
  //  if they are not a beginner
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  // let history = useHistory();
  // console.log(firstName,lastName,email,userName,password)

  console.log(firstName);

  const beginnerOnChange = () => {
    setBeginner(!beginner);
    setIntermediate(false);
  };

  const intermediateOnChange = () => {
    setIntermediate(!intermediate);
    setBeginner(false);
  };

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
        <input
          required
          type="text"
          id="fname"
          placeholder="First Name"
          name="fname"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <label for="lname">Last name:</label>
        <input
          
          type="text"
          id="lname"
          placeholder="Last Name"
          name="lname"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          
        ></input>
        <label for="username">Username:</label>
        <input
          
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          
        ></input>

        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          
        ></input>

        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          // placeholder="Email"
          placeholder="✉️ Email"
          name="email"
          
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          
        ></input>

        <div className="toggle">
          <label class="container">
            Beginner
            <input
              type="checkbox"
              checked={beginner}
              onClick={beginnerOnChange}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Intermediate
            <input
              type="checkbox"
              checked={intermediate}
              onClick={intermediateOnChange}
              required
            ></input>
            <span class="checkmark"></span>
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={() => {
            if (
              firstName == "" ||
              lastName == "" ||
              email == "" ||
              userName == "" ||
              password == ""
            ) {
              alert("all fields are required");
            } else {
              actions.createUser(
                firstName,
                lastName,
                email,
                userName,
                password,
                navagate("/login")
              );
            }
          }}
        />
      </form>
    </div>
  );
  //_____________________________________________________________________
};
