import React from "react";
import catmain from "../images/catmain.png";
import "../styles/Main.css";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="main-header"
      >
        <motion.h1>Welcome to my Cat Facts Page</motion.h1>
        <motion.h4>
          You can select through the navbar what you want about cats
        </motion.h4>
      </motion.div>

      <motion.img
        initial={{ x: "1000px" }}
        animate={{ x: "0px" }}
        transition={{ delay: 0.2, duration: 1 }}
        className="cat-main"
        src={catmain}
        alt=""
      />
    </div>
  );
};

export default Main;
