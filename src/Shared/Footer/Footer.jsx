import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer w-full py-24 bg-[#131313cc]">
      <div className="footer-container max-w-[1140px] m-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        <div>
          <div className="flex gap-2 mb-3">
            <FaHome size={20} style={{ color: "#fff" }} />
            <p>
              Ga-129, Mohakhali, <br /> Dhaka, Bangladesh-1212
            </p>
          </div>
          <div className="flex gap-2 mb-3">
            <FaPhone size={20} style={{ color: "#fff" }} />
            <p>(+88) 01611391706</p>
          </div>
          <div className="flex gap-2 mb-3">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
            <p>eng.zahangir20bd@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">About Me</h3>
          <p className="mb-3">
            Hi, This is me Zahangir Alam. Skilled MERN Stack Web developer
            proficient in HTML, CSS, and JavaScript. Strong expertise in React,
            Node.js, Express.js, and MongoDB. Skilled in design and implementing
            user-friendly interface, delivering high-quality code. Collaborative
            team player focused on meeting project objectives and deadlines.
          </p>
          <div className="flex gap-2 mb-3">
            <a href="#">
              <FaLinkedin size={30} style={{ color: "#fff" }} />
            </a>
            <a href="#">
              <FaFacebook size={30} style={{ color: "#fff" }} />
            </a>
            <a href="#">
              <FaTwitter size={30} style={{ color: "#fff" }} />
            </a>
            <a href="#">
              <FaInstagram size={30} style={{ color: "#fff" }} />
            </a>
            <a href="#">
              <FaGithub size={30} style={{ color: "#fff" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
