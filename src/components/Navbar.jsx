import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import caticon from "../images/caticon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/random">
          <input type="button" value="Random Images" />
        </Link>
        <Link to="/breeds">
          <input type="button" value="Cat Breeds" />
        </Link>
        <Link to="/about">
          <input type="button" value="About" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/">
          <img src={caticon} alt="cat" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
