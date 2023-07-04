import React from "react";
import "./ProjectCard.css";

import projectImage1 from "../../assets/images/project-1.png";
import projectImage2 from "../../assets/images/project-2.png";
import projectImage3 from "../../assets/images/project-3.png";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="section-container px-4">
      <h2 className="text-center text-3xl font-semibold pt-16 pb-8">
        Projects
      </h2>
      <div className="project-container max-w-[1140x] m-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-20">
        <div className="project-card bg-[#1a1919] px-4 py-5 ">
          <div className="h-[300px]">
            <div className="w-full h-full overflow-hidden">
              <img className="w-full" src={projectImage1} alt="Project" />
            </div>
          </div>
          <div className="bg-[#1a1919] z-10">
            <h2 className="text-xl font-semibold pt-4">Recipe Haven</h2>
            <span className=" text-[#fff]">(A Restaurant Website Design)</span>
            <p className="text-justify py-4">
              It's Restaurant Website based on Food Category and Chefs wise.
              This Web site build with React, Node.js, Express.js, MongoDB etc.
              This Web site build with selective food category and their Chefs.
              You can see the popular Food. and order food by your chosen Chefs
            </p>
            <div className="flex justify-between py-2">
              <Link to="https://recipe-haven-c6a94.web.app/">
                <button className="button card-btn">Demo</button>
              </Link>
              <Link to="/contact">
                <button className="button card-btn">Source</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-card bg-[#1a1919] px-4 py-5 ">
          <div className="h-[300px]">
            <div className="w-full h-full overflow-hidden">
              <img className="w-full" src={projectImage2} alt="Project" />
            </div>
          </div>
          <div className="bg-[#1a1919] z-10">
            <h2 className="text-xl font-semibold pt-4">Toy Galaxy</h2>
            <span className=" text-[#fff]">(A Online Toy Seller Website)</span>
            <p className="text-justify py-4">
              It's a toy seller Website based on Toy Category. This Web site
              build with React, Node.js, Express.js, MongoDB etc. This Web site
              build with toy category and make it tabs form and fully responsive
              and dynamic. You can see the popular Toys and category toy in
              different tabs and you can order toys.
            </p>
            <div className="flex justify-between py-2">
              <Link to="https://toy-galaxy-f088c.web.app/">
                <button className="button card-btn">Demo</button>
              </Link>
              <Link to="/contact">
                <button className="button card-btn">Source</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-card bg-[#1a1919] px-4 py-5 ">
          <div className="h-[300px]">
            <div className="w-full h-full overflow-hidden">
              <img className="w-full" src={projectImage3} alt="Project" />
            </div>
          </div>
          <div className="bg-[#1a1919] z-10">
            <h2 className="text-xl font-semibold pt-4">Focus Academy</h2>
            <span className=" text-[#fff]">
              (A Summer Camp Photography School Website)
            </span>
            <p className="text-justify py-4">
              It's a Summer camp Photography School Website. It's a Full Stack
              Web Application. It has Secure Login and User Authentication
              (isStudent, isInstructor, isAdmin) system. So that a user can
              login securely and access his features. and It has a Dynamic User
              Interface and Dashboard.
            </p>
            <div className="flex justify-between py-2">
              <Link to="https://recipe-haven-c6a94.web.app/">
                <button className="button card-btn">Demo</button>
              </Link>
              <Link to="/contact">
                <button className="button card-btn">Source</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
