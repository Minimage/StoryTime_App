import React, { useContext } from "react";
import { userContext } from "./global_context";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

export const Secret = () => {
  let navigate = useNavigate();
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const location = useLocation();

  return (
    <div className="secret">
      <h1>
        This is a super secret page that you should only access once logged in{" "}
      </h1>
    </div>
  );
};
