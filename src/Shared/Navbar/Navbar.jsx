import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //   const handleToggle = () => setOpen(!open);
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        {open ? (
          <FaTimes
            onClick={() => setOpen(!open)}
            size={20}
            style={{ color: "#fff" }}
          />
        ) : (
          <FaBars
            onClick={() => setOpen(!open)}
            size={20}
            style={{ color: "#fff" }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
