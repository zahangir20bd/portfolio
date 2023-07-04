import React from "react";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import PricingCard from "../components/PricingCard/PricingCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <SectionBanner
        heading="PROJECTS"
        subHeading="Some of my most recent works"
      />
      <ProjectCard />
      <PricingCard />
    </div>
  );
};

export default Projects;
