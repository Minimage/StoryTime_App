import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { userContext } from "./global_context";
import { Login } from "./login";

export const User = () => {
  const { auth, setAuth } = useContext(userContext);
  if (!auth) {
    return <Redirect to={"/Login"} />;
  }
  return (
    <div>
      <h1>Welcome to the User Page</h1>
    </div>
  );
};
