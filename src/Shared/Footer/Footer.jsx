import React from "react";
import { FaFacebook, FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div className="flex gap-2">
            <FaHome size={20} style={{ color: "#fff" }} />
            <p>
              Ga-129, Mohakhali, <br /> Dhaka, Bangladesh-1212
            </p>
          </div>
          <div className="flex gap-2">
            <FaPhone size={20} style={{ color: "#fff" }} />
            <p>(+88) 01611391706</p>
          </div>
          <div className="flex gap-2">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
            <p>eng.zahangir20bd@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">About Me</h3>
          <p>
            Hi, This is me Zahangir Alam. Skilled MERN Stack Web developer
            proficient in HTML, CSS, and JavaScript. Strong expertise in React,
            Node.js, Express.js, and MongoDB. Skilled in design and implementing
            user-friendly interface, delivering high-quality code. Collaborative
            team player focused on meeting project objectives and deadlines.
          </p>
          <div>
            <a href="#">
              <FaFacebook size={30} style={{ color: "#fff" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
