import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`${
        color ? "navBar-bg" : ""
      } navBar flex items-center justify-between px-5 fixed w-full z-10`}
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="logo" className="w-16 h-16" />
          <span>
            <h1 className="text-xl">Zahangir Alam</h1>
            <h5 className="tracking-widest">Web Developer</h5>
          </span>
        </div>
      </Link>

      <ul className={`${open ? "nav-menu active" : "nav-menu "} flex gap-4`}>
        <li onClick={handleToggle}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={handleToggle}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={handleToggle}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={handleToggle}>
          <a
            href="zahangir's_resume.pdf"
            download
            className="flex items-center gap-1"
          >
            Resume <FaDownload />
          </a>
        </li>
        <li onClick={handleToggle}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="hamburger">
        {open ? (
          <FaTimes onClick={handleToggle} size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars onClick={handleToggle} size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
