import React from "react";
import catmain from "../images/catmain.png";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-header">
        <h1>Welcome to my Cat Facts Page</h1>
        <h4>
          You can select through the hamburger bar what you want about cats
        </h4>
      </div>

      <img className="cat-main" src={catmain} alt="" />
    </div>
  );
};

export default Main;
