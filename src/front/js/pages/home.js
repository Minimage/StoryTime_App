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
  const { hidden, isHidden } = useContext(userContext);

  if (
    (!store.token && store.token === undefined) ||
    (!store.token && store.token === null)
  ) {
    const [titleRef, titleInView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px 0px",
    });
    //User NOT Logged In
    return (
      <div id="hero" className={!!hidden ? "hide" : "show"}>
        <div className="container-fluid p-0 ">
          <Fade in>
            <div className="row d-flex align-items-center">
              <div
                className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 aos-init aos-animate"
                data-aos="fade-right"
              >
                <Transform enterTransform="translateX(40px)" in>
                  <h1>ever had a hard time learning something new?</h1>
                  <h2>
                    Story Time is a fun and innovative way to help trigger yours
                    <br></br>Memory to request words and everything you've
                    learned
                  </h2>
                  {store.token &&
                  store.token !== null &&
                  store.token !== undefined ? (
                    // Authenticated
                    ""
                  ) : (
                    // Unauthenticated
                    <Link to="/signup">
                      <button type="button" className="btn btn-warning">
                        Get Started
                      </button>
                    </Link>
                  )}
                </Transform>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
                data-aos="fade-left"
              >
                <Transform enterTransform="translateX(-30px)" in>
                  <img src={image} className="img-fluid fade in" alt="" />
                </Transform>
              </div>
            </div>
          </Fade>

          {/* Split */}

          <div className="secondSection">
            <section id="about" className="about section-bg">
              <div className="container-fluid p-0">
                <div className="row gy-4">
                  <div className="image col-xl-5"></div>
                  <div className="col-xl-7">
                    <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                      <motion.h1
                        ref={titleRef}
                        animate={{ scale: titleInView ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* ___________________________________________________________________________________________________________*/}
                        <div className="Pronounciation">
                          {store.audioLink.audio && (
                            <audio controls>
                              <source
                                src={store.audioLink.audio}
                                type="audio/ogg"
                              />
                            </audio>
                          )}
                          {/* ___________________________________________________________________________________________________________*/}
                        </div>
                        {/* ___________________________________________________________________________________________________________*/}
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
