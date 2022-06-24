import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const ResetPassword = () => {
  const handleClick = () => {
    actions.reset(email);
  };

  const [email, setEmail] = useState("");
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
      <button
        onClick={() => {
          handleClick;
        }}
      >
        Submit
      </button>
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
