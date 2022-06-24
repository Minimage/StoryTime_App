import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    actions.reset(email);
  };

  return (
    <div className="container-fluid" style={{ textAlign: "center" }}>
      <h1>Forgot Password?</h1>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        style={{ width: "500px" }}
        placeholder="Enter your email"
      />
      <br />
      <button onClick={handleClick}>Submit</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
