import React from "react";
import "./Banner.css";
import intoImg from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="mask">
        <img className="intro-img" src={intoImg} alt="introImg" />
      </div>
      <div className="content">
        <p className="text-xl lg:text-2xl mb-2 uppercase">
          Hi, I'm Zahangir Alam
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold mb-10 uppercase">
          MERN Stack Web Developer
        </h1>
        <div>
          <Link to="/projects" className="button mr-2">
            Projects
          </Link>
          <Link to="/contact" className="button button-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
