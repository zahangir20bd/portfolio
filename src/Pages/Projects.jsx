import React from "react";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import PricingCard from "../components/PricingCard/PricingCard";

const Projects = () => {
  return (
    <div>
      <SectionBanner
        heading="PROJECTS"
        subHeading="Some of my most recent works"
      />
      <PricingCard />
    </div>
  );
};

export default Projects;
