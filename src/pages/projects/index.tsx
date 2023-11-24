import PageHeader from '@/components/PageHeader'
import Projects from '@/components/Projects'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
export type ProjectType = {
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: any;
  slug: string;
};
import client from '../../../sanity/sanity.client';
import Project from '@/components/Project';

const index = () => {
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
        setProjects(result);
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
      <Head>
        <title>Projects | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering, Contact" />
      </Head>
      <div className=''>
        <PageHeader title='projects' bg={'assets/construction-1.webp'}/>
        <div className="container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-16 mb-5 md:mb-16">
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
      </div>
    </>
  )
}

export default index