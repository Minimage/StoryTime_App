import React from "react";
import { Link } from "react-router-dom";
import "../../styles/notfound.css";

export const NotFound = () => {
  return (

  <Link to="/login">
    <h1 className="notFound">Invalid URL</h1>;

  </Link>

  )

};
