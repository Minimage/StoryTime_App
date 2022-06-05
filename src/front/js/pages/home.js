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
    //User NOT Logged In
    return (
      <div className="text-center mt-5">
        <h1>Welcome to StoryTime</h1>
      </div>
    );
  }

  //User Logged In
  return (
    <div className="container">
      <div className="heading text-center mt-3">
        <h1>Welcome (Username)</h1>
        <button
          onClick={() => {
            setAuth(false);
          }}
        >
          Log Out
        </button>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 col-sm-12 section1 bg-secondary">
          <h1>hello world</h1>
        </div>

        <div className="col-md-4 col-lg-4 d-none d-md-block ">
          <h1>Pannel</h1>
        </div>
      </div>
    </div>
  );
};
