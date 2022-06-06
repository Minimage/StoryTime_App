import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../pages/global_context";
import logo from "../../img/profile-pic.png";
import "../../styles/styles.css";

export const Navbar = () => {
  const { auth, setAuth } = useContext(userContext);
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ">Home</span>
        </Link>
        <div className="ml-auto">
          <Link to="/Login">
            <span
              className={
                auth === true ? "hide" : "show" + " btn btn-primary texter"
              }
            >
              Login
            </span>
          </Link>

          {/* Right now this profile pic is importing it into logo up top
              Going forward we will need to refactor our code to make it 
              pull from the stored profile pic in the back end */}
          <Link to="/User/1">
            <img
              src={logo}
              className={auth === false ? "hide" : "show" + " profile"}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
