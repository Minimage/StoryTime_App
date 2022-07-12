import React, { useState, useContext, useEffect } from "react";
// import Hangmen from "../component/Hangmen.js";
import { Transform } from "react-animation-components";
import "../../styles/about_us.css";

// import { motion } from "framer-motion";

export const AboutUs = () => {
  const [state, setState] = useState(false);
  const [modalState, setModalState] = useState(false);

  function toggleOpen() {
    setModalState((prevModalState) => !prevModalState);
  }
  function toggle() {
    setState((prevState) => !prevState);
  }
  useEffect(() => {
    toggle();
  }, []);

  return (
    <div>
      <div className="ABusCont">
        <div
          className={state && "box" ? " box active" : "box"}
          onClick={toggleOpen}
        >
          <div className="slide">
            <Transform exitTransform="translateX(-1000px)" in>
              <img
                id="picture"
                className={state ? "active" : ""}
                src="https://ca.slack-edge.com/T0BFXMWMV-U03538G6V9D-ac975af7b40f-512"
              />
            </Transform>

            <Transform
              enterTransform="translateX(0px)"
              exitTransform="translateX(1000px)"
              in
            >
              <div className={state ? "left active" : "left"}>
                <h1 className="name">Doug Montas</h1>
                <h5>Coder professional</h5>

                <p className="text">
                  a Miami native. Doug is a future Blockchain specialist and
                  coding expert.
                </p>
                <h5>
                  <a href="https://github.com/DougMontas">Github</a> -{" "}
                  <a href="https://www.linkedin.com/in/futureitprofessional/">
                    LinkedIn
                  </a>
                </h5>
              </div>
            </Transform>
          </div>
          <div className="slide">
            <Transform exitTransform="translateX(-1000px)" in>
              <img
                id="picture"
                className={state ? "active" : ""}
                src="https://ca.slack-edge.com/T0BFXMWMV-U033E6TK4QK-76ec8fa3b0b4-512"
              />
            </Transform>

            <Transform
              enterTransform="translateX(0px)"
              exitTransform="translateX(1000px)"
              in
            >
              <div className={state ? "left active" : "left"}>
                <h1 className="name">Sean Campbell</h1>
                <h5>Coder professional</h5>
                <p className="text">
                  a New York native. Sean is a musician with aspirations of
                  being a Python expert{" "}
                </p>
                <h5>
                  <a href="https://github.com/Minimage">Github</a> -{" "}
                  <a href="https://www.linkedin.com/in/sean-campbell-cpht-437aa780/">
                    LinkedIn
                  </a>
                </h5>
              </div>
            </Transform>
          </div>
          <div className="slide">
            <Transform exitTransform="translateX(-1000px)" in>
              <img
                id="picture"
                className={state ? "active" : ""}
                src="https://ca.slack-edge.com/T0BFXMWMV-U032MF8R23Z-e5010381314f-512"
              />
            </Transform>

            <Transform
              enterTransform="translateX(0px)"
              exitTransform="translateX(1000px)"
              in
            >
              <div className={state ? "left active" : "left"}>
                <h1 className="name">Alan Martinez</h1>
                <h5>Coder professional</h5>
                <p className="text">
                  a Texas native, Alan is a gamer with a dream of being a coder
                  for google.{" "}
                </p>
              </div>
            </Transform>
          </div>
          <div className="slide">
            <Transform exitTransform="translateX(-1000px)" in>
              <img
                id="picture"
                className={state ? "active" : ""}
                src="https://ca.slack-edge.com/T0BFXMWMV-U02FKP23DEJ-275306524d96-512"
              />
            </Transform>

            <Transform
              enterTransform="translateX(0px)"
              exitTransform="translateX(1000px)"
              in
            >
              <div className={state ? "left active" : "left"}>
                <h1 className="name">Nick Sisneros</h1>
                <h5>Coder professional</h5>
                <p className="text">
                  A Colorado native, Nick is based in Shanghai and has dreams of
                  making video games.{" "}
                </p>
              </div>
            </Transform>
          </div>
        </div>
      </div>
    </div>
  );
};
