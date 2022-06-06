import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { userContext } from "./global_context";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import { Transform } from "react-animation-components";
import image from "../../img/hero-img.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../../styles/home.css";

export const Home = () => {
  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  if (!auth) {
    const [titleRef, titleInView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px 0px",
    });
    //User NOT Logged In
    return (
      <div id="hero">
        <div class="container-fluid p-0 ">
          <Fade in>
            <div class="row d-flex align-items-center">
              <div
                class="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 aos-init aos-animate"
                data-aos="fade-right"
              >
                <Transform enterTransform="translateX(40px)" in>
                  <h1>Ever had a hard time learning something new?</h1>
                  <h2>
                    Story Time is a fun and innovative way to help trigger yours
                    <br></br>Memory to request words and everything you've
                    learned
                  </h2>
                  <Link to="/signup">
                    <button type="button" class="btn btn-warning">
                      Get Started
                    </button>
                  </Link>
                </Transform>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
                data-aos="fade-left"
              >
                <Transform enterTransform="translateX(-30px)" in>
                  <img src={image} class="img-fluid fade in" alt="" />
                </Transform>
              </div>
            </div>
          </Fade>

          {/* Split */}

          <div className="firstSection">
            <motion.h1
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              First section
            </motion.h1>
          </div>

          <div className="secondSection">
            <section id="about" class="about section-bg">
              <div class="container-fluid p-0">
                <div class="row gy-4">
                  <div class="image col-xl-5"></div>
                  <div class="col-xl-7">
                    <div class="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                      <motion.h1
                        ref={titleRef}
                        animate={{ scale: titleInView ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h1 className="mt-5" style={{ color: "#3a556e" }}>
                          Testing text
                        </h1>
                      </motion.h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  //User Logged In
  return (
    <div className="text-center mt-5">
      <h1>Welcome to StoryTime</h1>
    </div>
  );
};
