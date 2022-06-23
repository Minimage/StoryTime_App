import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./global_context";
import { Context } from "../store/appContext";

export const User = () => {
  let navigate = useNavigate();
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.syncTokenFromSessionStore();
    if (!store.token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="user">
      <h1>Welcome to the User Page</h1>
    </div>
  );
};
