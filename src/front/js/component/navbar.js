import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../pages/global_context";
import { Context } from "../store/appContext";
import logo from "../../img/profile-pic.png";
import "../../styles/styles.css";

export const Navbar = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ">Home</span>
        </Link>

        {/* <Link to="/lesson">
          <span className="navbar-brand mb-0 h1 ">Lesson</span>
        </Link> */}

        <div className="ml-auto">
          {store.token == "null" ||
          (store.token == null &&
            store.token != "" &&
            store.token != "undefined") ? (
            <Link to="/Login">
              <span
                className={
                  auth === true ? "hide" : "show" + " btn btn-primary texter"
                }
              >
                Login
              </span>
            </Link>
          ) : (
            <button
              onClick={() => {
                actions.logout();
              }}
            >
              Log Out
            </button>
          )}

          {/* Right now this profile pic is importing it into logo up top
              Going forward we will need to refactor our code to make it 
              pull from the stored profile pic in the back end */}
          <Link to="/User/1">
            <img
              src={logo}
              className={auth === false ? "hide" : "show" + " profile"}
            />
          </Link>

          {store.token &&
          store.token != "" &&
          store.token != undefined &&
          store.token != null &&
          store.token != "null" ? (
            ""
          ) : (
            <div className="ml-auto">
              <Link to="/signup">
                <div className={auth === true ? "hide" : "show"}>Sign up </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
