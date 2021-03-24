import React from "react";
import { getRandomCatPhoto } from "../utils/FetchData";
import { motion } from "framer-motion";

const Random = () => {
  return (
    <motion.div
      initial={{ x: "250vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
      className="random-cat"
    >
      <button onClick={getRandomCatPhoto}>Click</button>
    </motion.div>
  );
};

export default Random;
