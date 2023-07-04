import React from "react";
import Banner from "../components/Banner/Banner";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import PricingCard from "../components/PricingCard/PricingCard";

const Home = () => {
  return (
    <>
      <Banner />
      <ProjectCard />
      <PricingCard />
    </>
  );
};

export default Home;
