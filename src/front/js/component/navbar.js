import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import { userContext } from "../pages/global_context";

export const Navbar = () => {
  const { auth, setAuth } = useContext(userContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
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
        </div>
      </div>
    </nav>
  );
};
