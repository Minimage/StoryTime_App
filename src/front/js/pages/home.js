import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { userContext } from "./global_context";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  if (!auth) {
    //This will be the home page that is displayed if the user is not logged in
    return (
      <div className="text-center mt-5">
        <h1>Home Page</h1>
        <Link to="/Login">
          <span className="navbar-brand mb-0 h1" style={{ color: "" }}>
            Login
          </span>
        </Link>
      </div>
    );
  }
  //This is the home page for if the user is logged in
  return (
    <div>
      <h1>Welcome (Username)</h1>
      <h1>hello</h1>
      <button
        onClick={() => {
          setAuth(false);
        }}
      >
        Log Out
      </button>
    </div>
  );
};
