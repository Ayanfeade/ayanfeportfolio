import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/img/Ayanfe CEO.png";
import "./Aboutme.css";

function Aboutme() {
  return (
    <div className="about-session">
      <h1>About Me</h1>
      <div className="aboutme">
        <div className="about">
          <p>
            I'm Ogungbeje Ayanfe Adesola. I am a 300L student of Computer
            Science from Adekunle Ajasin University Akungba-Akoko. I'm into
            Websites development. I have six months training experience at Dalse
            Technology Hub LTD Akungba Akoko , Ondo State, Nigeria.
            <Link>Learn More.....</Link>
          </p>
        </div>
        <div className="about-img">
          <img src={image} alt="My Picture" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
