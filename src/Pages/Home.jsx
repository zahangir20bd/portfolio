import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
