import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export type ServiceType = {
  title: string;
  description: Array<any>;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
};
import client from "../../../../sanity/sanity.client";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";
import { PortableText } from "@portabletext/react";

const service = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const [service, setService] = useState<ServiceType[]>([]);

  const query = `*[_type == "service" && slug.current == "${slug}"]{
    _id,
    title,
    description,
    slug,
    "imageUrl": image.asset->url,
    "imageUrl2": icon.asset->url,
  }`;

  const servicesClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setService(result);
        console.log(result[0].title);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    servicesClient();
  }, [slug]);

  return (
    <>
      {service.length > 0 && (
        <div>
          <Head>
            <title>{`${service[0].title} | Neutram Geomatic Engineering`}</title>
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
            <PageHeader title={service[0].title} bg={service[0].imageUrl} />
            <div className="container-60 my-8 md:my-16">
              <div className="flex flex-col gap-4">
                <p className="text-lg text-justify">
                  <PortableText
                    value={service[0].description}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default service;
