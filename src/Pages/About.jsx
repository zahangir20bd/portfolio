import React from "react";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";
import aboutImage from "../assets/images/about.jpg";
import aboutImage2 from "../assets/images/about2.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <SectionBanner heading="ABOUT ME" subHeading="MERN Stack Web Developer" />
      <div className="about-me w-full h-full my-12 flex flex-col md:flex-row items-center justify-center flex-wrap">
        <div className="left text-center m-auto p-4 max-w-[350px]">
          <h1 className="text-2xl">Who Am I?</h1>
          <p className="my-5">
            I am a MERN Stack Web Developer. I Create Dynamic, User Friendly and
            Responsive Websites for my clients. I am proficient in HTML, CSS,
            JavaScript, React, Next.js, Node.js, Express.js, MongoDB and much
            more.
          </p>
          <Link>
            <button className="button">Contact</button>
          </Link>
        </div>
        <div className="right max-w-[700px]">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src={aboutImage}
                alt="About img"
                className="about-img rounded-lg"
              />
            </div>
            <div className="img-stack bottom">
              <img
                src={aboutImage2}
                alt="About img"
                className="about-img rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
