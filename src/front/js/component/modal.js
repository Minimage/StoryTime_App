import React, { useState, useEffect } from "react";
import "../../styles/modal.css";

export default function Modal() {
  const [state, setState] = useState(false);
  const open = () => {
    setState((prevState) => !prevState);
  };
  const close = () => {
    setState(false);
  };

  return (
    <div>
      <div className={"container"}>
        <button onClick={open}>Open</button>
      </div>
      <div className={state && "modal" ? " is-open" : "modal"}>
        <button onClick={close}>close</button>
      </div>
    </div>
  );
}
