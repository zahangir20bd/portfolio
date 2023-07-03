import React from "react";
import "./SectionBanner.css";

const SectionBanner = ({ heading, subHeading }) => {
  return (
    <div className="section-banner">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb=1">
          {heading}
        </h2>
        <h4 className="text-lg md:text-xl text-center font-semibold">
          {subHeading}
        </h4>
      </div>
    </div>
  );
};

export default SectionBanner;
