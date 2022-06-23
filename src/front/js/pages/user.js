import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "./global_context";
import { Context } from "../store/appContext";

export const User = () => {
  let navigate = useNavigate();
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  //Checks to see if the user is autherized (logged in) and if they are not then it will Navigate to login page
  //This will prevent someone from just trying to access the user page or content they are not autherized to
  //access by simply typing in the url for the page

  return (
    <div className="user">
      {store.token && store.token !== null && store.token !== undefined ? (
        <h1>Welcome to the User Page</h1>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};
