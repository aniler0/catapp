import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import caticon from "../images/caticon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: "-250px" }}
      animate={{ y: "0px" }}
      transition={{ delay: 0, type: "spring", stiffness: 30 }}
      className="navbar"
    >
      <div className="navbar-left">
        <Link to="/random">
          <motion.input
            whileHover={{
              scale: 1.1,
            }}
            type="button"
            value="Random Images"
          />
        </Link>
        <Link to="/breeds">
          <motion.input
            whileHover={{
              scale: 1.1,
            }}
            type="button"
            value="Cat Breeds"
          />
        </Link>
        <Link to="/about">
          <motion.input
            whileHover={{
              scale: 1.1,
            }}
            type="button"
            value="About"
          />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/">
          <img src={caticon} alt="cat" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
