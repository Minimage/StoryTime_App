import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { userContext } from "./global_context";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import image from "../../img/hero-img.png";
import "../../styles/home.css";

export const Home = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  if (!auth) {
    //User NOT Logged In
    return (
      <div className="text-center mt-5">
        <h1>Welcome to StoryTime</h1>
      </div>
    );
  }

  //User Logged In
  return (
    <div id="hero">
      <div class="container ">
        <div class="row d-flex align-items-center">
          <div
            class="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 aos-init aos-animate"
            data-aos="fade-right"
          >
            <h1>Learn Mandarin with StoryTime</h1>
            <h2>
              We are team of talented designers making websites with Bootstrap
            </h2>
            <a href="#about" class="btn-get-started scrollto">
              Get Started
            </a>
          </div>
          <div
            class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
            data-aos="fade-left"
          >
            <img src={image} class="img-fluid fade in" alt="" />
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col">
    //       <div
    //         class="d-flex flex-column flex-shrink-0 p-3 bg-light"
    //         style={{ width: "280px" }}
    //       >
    //         <a
    //           href="/"
    //           class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    //         >
    //           <svg class="bi me-2" width="40" height="32"></svg>
    //           <span class="fs-4">Sidebar</span>
    //         </a>
    //         <hr />
    //         <ul class="nav nav-pills flex-column mb-auto">
    //           <li class="nav-item">
    //             <a href="#" class="nav-link active" aria-current="page">
    //               <svg class="bi me-2" width="16" height="16"></svg>
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="nav-link link-dark">
    //               <svg class="bi me-2" width="16" height="16"></svg>
    //               Dashboard
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="nav-link link-dark">
    //               <svg class="bi me-2" width="16" height="16"></svg>
    //               Orders
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="nav-link link-dark">
    //               <svg class="bi me-2" width="16" height="16"></svg>
    //               Products
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="nav-link link-dark">
    //               <svg class="bi me-2" width="16" height="16"></svg>
    //               Customers
    //             </a>
    //           </li>
    //         </ul>
    //         <hr />
    //         <div class="dropdown">
    //           <a
    //             href="#"
    //             class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
    //             id="dropdownUser2"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <img
    //               src="https://github.com/mdo.png"
    //               alt=""
    //               width="32"
    //               height="32"
    //               class="rounded-circle me-2"
    //             />
    //             <strong>mdo</strong>
    //           </a>
    //           <ul
    //             class="dropdown-menu text-small shadow"
    //             aria-labelledby="dropdownUser2"
    //           >
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 New project...
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Settings
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Profile
    //               </a>
    //             </li>
    //             <li>
    //               <hr class="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Sign out
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col">Body</div>
    //     </div>
    //     <div class="b-example-divider w-100"></div>
    //   </div>

    //   {/* <div className="heading text-center mt-3">
    //     <h1>Welcome (Username)</h1>
    //     <button
    //       onClick={() => {
    //         setAuth(false);
    //       }}
    //     >
    //       Log Out
    //     </button>
    //   </div>

    //   <div className="row mt-5">
    //     <div className="col-md-8 col-sm-12 section1 bg-secondary">
    //       <h1>hello world</h1>
    //     </div>

    //     <div className="col-md-4 col-lg-4 d-none d-md-block ">
    //       <h1>Pannel</h1>
    //     </div>
    //   </div> */}
    // </div>
  );
};
