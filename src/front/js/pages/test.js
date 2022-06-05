import React from "react";
import image from "../../img/hero-img.png";
import "../../styles/styles.css";

export const Test = () => {
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
  );
};
