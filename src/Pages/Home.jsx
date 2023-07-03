import React from "react";
import Banner from "../components/Banner/Banner";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
