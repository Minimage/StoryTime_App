import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import { userContext } from "../pages/global_context";
import { Context } from "../store/appContext";
import "../../styles/styles.css";
import "../../styles/navbar.css";
import logo from "../../img/new-story-time-logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyNavbar = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const redirect = () => {
    actions.logout();

    // actions.syncTokenFromSessionStore();
    // if (store.token === null) {
    //   navigate("/ratings");
    // }
  };
  return (
    // <nav className="navbar navbar-light bg-light">
    //   {/* <img src={logo2} className="logo"></img> */}
    //   <div className="container-fluid">
    //     <img src={logo} className="logo"></img>
    //     <div className="links">
    //       <Link to="/">
    //         <span className=" route mb-0 h1 ">Home</span>
    //       </Link>

    //       <Link to="/about_us">
    //         <span className="route mb-0 h1 ">About Us</span>
    //       </Link>

    //       <div className="ml-auto">
    //         {store.token == "null" ||
    //         (store.token == null &&
    //           store.token != "" &&
    //           store.token != "undefined") ? (
    //           <Link to="/Login">
    //             <span
    //               className={
    //                 auth === true ? "hide" : "show" + " btn btn-primary texter"
    //               }
    //             >
    //               Login
    //             </span>
    //           </Link>
    //         ) : (
    //           <span
    //             style={{ textDecoration: "underline", color: "blue" }}
    //             className="route mb-0 h1"
    //             onClick={() => {
    //               actions.logout();
    //               // <Link to={"/ratings"}>actions.logout()</Link>;
    //               // if (actions.logout()) {
    //               //   <Link to={"/ratings"}></Link>;
    //               // }
    //               // <Link to={"/ratings"}>
    //               //   actions.logout(),
    //               // </Link>;

    //               redirect();
    //             }}
    //           >
    //             Log Out
    //           </span>
    //         )}

    //         {/* <Link to="/User/1">
    //           <img
    //             src={logo}
    //             className={auth === false ? "hide" : "route" + " profile"}
    //           />
    //         </Link> */}

    //         {store.token &&
    //         store.token != "" &&
    //         store.token != undefined &&
    //         store.token != null &&
    //         store.token != "null" ? (
    //           ""
    //         ) : (
    //           <div className="ml-auto">
    //             <Link to="/signup">
    //               <div className={auth === true ? "hide" : "show"}>
    //                 Sign up{" "}
    //               </div>
    //             </Link>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <Navbar id="navbar" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div id="rightside" className="ml-auto">
              {store.token == "null" ||
              (store.token == null &&
                store.token != "" &&
                store.token != "undefined") ? (
                <Link to="/Login">
                  <span
                    className={
                      auth === true
                        ? "hide"
                        : "show" + " btn btn-primary texter"
                    }
                  >
                    Login
                  </span>
                </Link>
              ) : (
                <span
                  style={{ textDecoration: "underline", color: "blue" }}
                  className="route mb-0 h1"
                  onClick={() => {
                    actions.logout();
                    <Link to={"/ratings"}>actions.logout()</Link>;
                    if (actions.logout()) {
                      <Link to={"/ratings"}></Link>;
                    }
                    <Link to={"/ratings"}>actions.logout(),</Link>;

                    redirect();
                  }}
                >
                  Log Out
                </span>
              )}

              <Link to="/User/1">
                <img
                  src={logo}
                  className={auth === false ? "hide" : "route" + " profile"}
                />
              </Link>

              {store.token &&
              store.token != "" &&
              store.token != undefined &&
              store.token != null &&
              store.token != "null" ? (
                ""
              ) : (
                <div className="ml-auto">
                  <Link to="/signup">
                    <div
                      className={
                        auth === true ? "hide" : "show btn btn-primary texter"
                      }
                    >
                      Sign up{" "}
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
