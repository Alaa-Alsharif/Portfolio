import React from "react";
import ParticlesContainer from "../ParticlesContainer.jsx";
import "../styles/styles.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="introduction">
      <ParticlesContainer />

      <div className="text-container">
        <div className="sidedesign">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="text">
          <h2>
            Hi, I'm <span>Alaa</span>
          </h2>
          <div className="subtxt">
            <p>I develop User interfaces</p>
            <p>and Web Applications</p>
          </div>

          <a
            href="..\src\components\Alaa-Alsharif.pdf"
            download
            className="primaryBtn"
          >
            Resume
          </a>
        </div>
      </div>

      {/* <div className="image-container">
        <img src="src\assets\heroimg2.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
