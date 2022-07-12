import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import { userContext } from "../pages/global_context";
import { Context } from "../store/appContext";
// import logo from "../../img/profile-pic.png";
import "../../styles/styles.css";
import logo from "../../img/new-story-time-logo.png";
// import logo2 from "../../img/alan's-storytime-logo.svg"

export const Navbar = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const redirect = () => {
    actions.logout();

    // actions.syncTokenFromSessionStore();
    // if (store.token === null) {
    //   navigate("/ratings");
    // }
  };
  return (
    <nav className="navbar navbar-light bg-light">
      {/* <img src={logo2} className="logo"></img> */}
      <div className="container">
        <img src={logo} className="logo"></img>
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ">Home</span>
        </Link>

        <Link to="/about_us">
          <span className="navbar-brand mb-0 h1 ">About Us</span>
        </Link>

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
            <span
              style={{ textDecoration: "underline", color: "blue" }}
              className="navbar-brand mb-0 h1"
              onClick={() => {
                actions.logout();
                // <Link to={"/ratings"}>actions.logout()</Link>;
                // if (actions.logout()) {
                //   <Link to={"/ratings"}></Link>;
                // }
                // <Link to={"/ratings"}>
                //   actions.logout(),
                // </Link>;

                redirect();
              }}
            >
              Log Out
            </span>
          )}

          {/* <Link to="/User/1">
            <img
              src={logo}
              className={auth === false ? "hide" : "show" + " profile"}
            />
          </Link> */}

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
