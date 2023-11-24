import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import client from '../../../../sanity/sanity.client';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import PageHeader from '@/components/PageHeader';
export type ProjectType = {
  title: string;
  description: Array<any>;
  slug: string;
  imageUrl: any;
  location: string;
  category: string;
};

const project = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const [project, setProject] = useState<ProjectType[]>([]);

  const query = `*[_type == "project" && slug.current == "${slug}"]{
    _id,
    title,
    location,
    description,
    slug,
    category,
    "imageUrl": image.asset->url,
  }`;

  const projectsClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setProject(result);
        console.log(result[0].title);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    projectsClient();
  }, [slug]);

  return (
    <>
      {project.length > 0 && (
        <div>
          <Head>
            <title>{`${project[0].title} | Neutram Geomatic Engineering`}</title>
            <link rel="icon" href="/neutram-icon.svg" />
            <meta
              name="description"
              content="Neutram Geomatic Engineering is a Land Surveying firm based in Uganda"
            />
            <meta
              name="keywords"
              content="Neutram, Geomatic, Engineering, Contact"
            />
          </Head>
          <div>
            <PageHeader title={project[0].title} bg={project[0].imageUrl} />
            <div className="flex flex-col gap-4">
              <p className="my-8 md:my-16 text-lg text-justify">
                <div className="container lg:container-60">
                  <PortableText value={project[0].description} />
                </div>
              </p>
            </div>
          </div>
        </div>
      )} 
    </>
  )
}

export default project