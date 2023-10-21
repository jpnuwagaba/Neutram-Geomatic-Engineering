import React from "react";

const MissionVision = () => {
  return (
    <>
      <div className="bg-themeBlue py-6 md:py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white underline">
              Our Vision
            </div>
            <div className="text-white">
              To be at the forefront of the built environment industry by
              providing comprehensive solutions in surveying, civil engineering,
              architecture, project planning and management, real estate,
              property valuation and management, quantity surveying, and cost
              engineering.
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white underline">
              Our Vision
            </div>
            <div className="text-white">
              To be the driving force behind transformative projects in the
              built environment by delivering exceptional solutions that solve
              geospatial challenges, enabling our clients to achieve their goals
              and create a positive impact in the world.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
