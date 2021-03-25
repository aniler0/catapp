import React from "react";
import "../styles/About.css";
import webdev from "../images/webdev.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ x: "250vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
      className="about"
    >
      <div className="about-text">
        <motion.h1 whileHover={{ scale: 1.1 }}>ABOUT</motion.h1>
        <motion.h4>
          Hello ! My name is Anıl. I am a Web Developer who is really enjoy when
          make projects and learn new things.{" "}
        </motion.h4>
      </div>
      <img src={webdev} alt="webdev" />
      <div className="social-media">
        <h3>Contact Me</h3>
        <div className="links">
          <a href="https://www.github.com/aniler0" target="_blank">
            <motion.img whileHover={{ scale: 1.3 }} src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/aniler0/" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a href="http://twitter.com/_aniler" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={twitter}
              alt="twitter"
            />
          </a>
          <a href="http://instagram.com/anlerr" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
