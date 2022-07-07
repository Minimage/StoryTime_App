import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import { text } from "@fortawesome/fontawesome-svg-core";
import "../../styles/share.css";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <h3 className="footer">Story Time Development Team</h3>
      <a href="http://www.4geeksacademy.com">4Geeks Academy</a>

      <div className="social" style={{ textAlign: 'center' }}>
            <SocialIcon url="https://twitter.com/intent/tweet?text=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/%0A%0ALearn%20a%20language%20the%20easy%20way!" />
            <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/" />
            <SocialIcon url="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&title=Story%20Time%20%40%20English%20=%3E%20Mandarin&summary=Learn%20a%20language%20the%20easy%20way!&source=" />
            <SocialIcon url="https://github.com/DougMontas/StoryTime_App" />
            <SocialIcon url="https://pinterest.com/pin/create/button/?url=Story%20Time%20%40%20English%20=%3E%20Mandarin&media=https%3A//3000-dougmontas-storytimeapp-5f4a138kq1y.ws-us51.gitpod.io/&description=Learn%20a%20language%20the%20easy%20way!" />
        </div>
    </footer>
  );
};


