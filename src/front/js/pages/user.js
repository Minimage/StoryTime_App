import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./global_context";
import { Login } from "./login";

export const User = () => {
  const { auth, setAuth } = useContext(userContext);

  //Checks to see if the user is autherized (logged in) and if they are not then it will Navigate to login page
  //This will prevent someone from just trying to access the user page or content they are not autherized to
  //access by simply typing in the url for the page
  if (!auth) {
    return <Navigate to={"/Login"} />;
  }
  return (
    <div className="user">
      <h1>Welcome to the User Page</h1>
    </div>
  );
};
