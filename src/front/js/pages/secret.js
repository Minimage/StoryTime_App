import React, { useContext } from "react";
import { userContext } from "./global_context";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router";

export const Secret = () => {
  const { auth, setAuth } = useContext(userContext);
  const location = useLocation;
  if (!auth) {
    return <Redirect to={"/Login"} replace state={{ from: location }} />;
  }
  return (
    <div>
      <h1>
        This is a super secret page that you should only access once logged in{" "}
      </h1>
    </div>
  );
};
