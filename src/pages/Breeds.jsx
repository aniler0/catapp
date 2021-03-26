import React, { useEffect, useState } from "react";
import { getCatBreeds } from "../utils/FetchData";
import "../styles/Breeds.css";
import { motion } from "framer-motion";
import Breed from "../components/Breed";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getCatBreeds(setBreeds);
  }, []);

  return (
    <motion.div
      initial={{ x: "250vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
      className="breeds"
    >
      <Breed breeds={breeds} />
    </motion.div>
  );
};

export default Breeds;
