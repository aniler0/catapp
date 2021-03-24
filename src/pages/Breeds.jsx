import React from "react";
import { motion } from "framer-motion";

const Breeds = () => {
  return (
    <motion.div
      initial={{ x: "250vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
    >
      about
    </motion.div>
  );
};

export default Breeds;
