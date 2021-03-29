import React from "react";
import Random from "../components/Random";
import { motion } from "framer-motion";
import "../styles/RandomImg.css";

const RandomImg = () => {
  return (
    <motion.div
      initial={{ x: "-250vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
      className="random-cat"
    >
      <Random />
    </motion.div>
  );
};

export default RandomImg;
