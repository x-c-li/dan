import React from "react";
import "./Hero.scss";
import logo from "./imgs/logo-temp.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-txt">
        <div className="hero-title">Hey, I'm Dan.</div>
        <div className="hero-descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
      </div>
      <img className="hero-temp-img" src={logo}></img>
    </div>
  );
}

export default Hero;
