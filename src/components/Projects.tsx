import React, { useEffect, useState } from "react";
import Project from "./Project";
export type ProjectType = {
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: any;
  slug: string;
};
import client from "../../sanity/sanity.client";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const query = `*[_type == 'project']{
    _id,
    title,
    category,
    location,
    description,
    "imageUrl": image.asset->url,
    slug,
  }`;

  const projectsClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setProjects(result.slice(0, 3));
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    projectsClient();
  }, []);

  return (
    <>
      <div className="container py-8 md:py-16 mb-5 md:mb-16">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects &&
            projects.map((project, index) => (
              <div key={index}>
                <Project
                  name={project.title}
                  category={project.category}
                  location={project.location}
                  text={project.description}
                  image={project.imageUrl}
                  link={`/projects/${(project.slug as any).current}`}
                />
              </div>
            ))}
        </div>
        <Link
          className="float-right mt-5 bg-themeBlue text-sm font-bold uppercase text-white px-2 py-1 rounded"
          href={"projects"}
        >
          see all projects
        </Link>
      </div>
    </>
  );
};

export default Projects;
