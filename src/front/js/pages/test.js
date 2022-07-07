import React from "react";
import { Fade } from "react-animation-components";
import { Transform } from "react-animation-components";
import image from "../../img/hero-img.png";
import "../../styles/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom"



export const Test = () => {
    
  return (
    <div id="hero">
      <div>
<SocialIcon url="https://twitter.com/intent/tweet?text=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/%0A%0ALearn%20a%20language%20the%20easy%20way!" />
<SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/" />
<SocialIcon url="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&title=Story%20Time%20%40%20English%20=%3E%20Mandarin&summary=Learn%20a%20language%20the%20easy%20way!&source=" />
<SocialIcon url="https://github.com/DougMontas/StoryTime_App" />
<SocialIcon url="https://pinterest.com/pin/create/button/?url=Story%20Time%20%40%20English%20=%3E%20Mandarin&media=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&description=Learn%20a%20language%20the%20easy%20way!" />



      
      </div>
      <div class="container ">
        <Fade in>
          <div class="row d-flex align-items-center">
            <div
              class="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 aos-init aos-animate"
              data-aos="fade-right"
            >
              <Transform enterTransform="translateX(50px)" in>
                <h1>Learn Mandarin with StoryTime</h1>
                {/* <h1><a href="https://twitter.com/intent/tweet?text=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/%0A%0ALearn%20a%20language%20the%20easy%20way!">Share on Twitter</a></h1>
                <h1><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/">Share on Facebook</a></h1>
                <h1><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&title=Story%20Time%20%40%20English%20=%3E%20Mandarin&summary=Learn%20a%20language%20the%20easy%20way!&source=">Share on LinkedIn</a></h1>
                <h1><a href="https://pinterest.com/pin/create/button/?url=Story%20Time%20%40%20English%20=%3E%20Mandarin&media=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&description=Learn%20a%20language%20the%20easy%20way!">Pin on Pinterest</a></h1>
                <h1><a href="https://github.com/DougMontas/StoryTime_App">Share on GitHub</a></h1> */}
                <h2>
                  We are team of talented designers making websites with
                  Bootstrap
                </h2>
                <a href="#about" class="btn-get-started scrollto">
                  Get Started
                </a>
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
      </div>
    </div>
  );
};
