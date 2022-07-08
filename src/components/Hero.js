import React from "react";
import "./Hero.scss";
import logo from "./imgs/logo-temp.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-title">Dan's Repair</div>
      <div className="hero-descr">ipsum lorumasdfklj</div>
      <img src={logo}></img>
    </div>
  );
}

export default Hero;
