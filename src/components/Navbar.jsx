import React from "react";
import "../styles/Navbar.css";
import caticon from "../images/caticon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <input type="button" value="Random Images" />
        <input type="button" value="Cat Breeds" />
        <input type="button" value="About" />
      </div>
      <div className="navbar-right">
        <img src={caticon} alt="cat" />
      </div>
    </div>
  );
};

export default Navbar;
