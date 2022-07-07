import React, { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "./global_context";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const navigate = useNavigate();
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
    actions.syncTokenFromSessionStore();
    if (store.token) {
      navigate("/");
    }
  });

  //_____________________________________________________________________
  return (
    <div className="container-fluid" id="signup_form">
      <form>
        <label for="fname"></label>
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

        <label for="lname"></label>
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          name="lname"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <label for="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>

        <label for="password"></label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <label for="email"></label>
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
                navigate("/login")
              );
            }
          }}
        />
      </form>
    </div>
  );
  //_____________________________________________________________________
};
