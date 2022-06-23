import React, { useContext } from "react";
import { userContext } from "./global_context";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

//  ** We will need to make a button on the home page that allows us to access learning ** //
//  ** and also set up a location hook to remember when we want to access learning ** //
export const Learning = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  return (
    <div className="learning">
      {store.token && store.token !== null && store.token !== undefined ? (
        // Authenticated
        <div>
          <h1>Page for learning</h1>
        </div>
      ) : (
        // Unauthenticated
        navigate("/login")
      )}
    </div>
  );
};
