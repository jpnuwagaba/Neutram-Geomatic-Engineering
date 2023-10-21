import React from "react";
import Project from "./Project";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-16 mb-5 md:mb-16">
        <Project
          name={"Arua Mall BOQ and Costing"}
          category={"Quantity Surveying"}
          location={"Kampala, Uganda"}
          text={""}
          image={'civil.jpg'}
          link={""}
        />
        <Project
          name={"Arua Mall BOQ and Costing"}
          category={"Quantity Surveying"}
          location={"Kampala, Uganda"}
          text={""}
          image={'civil.jpg'}
          link={""}
        />
        <Project
          name={"Arua Mall BOQ and Costing"}
          category={"Quantity Surveying"}
          location={"Kampala, Uganda"}
          text={""}
          image={'civil.jpg'}
          link={""}
        />
      </div>
    </>
  );
};

export default Projects;
