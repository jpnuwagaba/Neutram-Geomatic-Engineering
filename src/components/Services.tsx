import React, { useEffect, useState } from "react";
import Service from "./Service";
export type ServiceType = {
  title: string;
  description: string;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
};
import client from "../../sanity/sanity.client";
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const query = `*[_type == 'service']{
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
        setServices(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    servicesClient();
  }, []);

  return (
    <>
      <div className="bg-sky-50 py-8 md:py-24">
        <div className="container">
          <div className="flex flex-row items-center justify-between mb-3 md:mb-6">
            <div className="font-bold text-2xl text-themeBlue">
              Explore our services
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services &&
              services.map((service, index) => (
                <div key={index}>
                  <Service
                    service={service.title}
                    icon={service.imageUrl2}
                    link={`/services/${(service.slug as any).current}`}
                  />
                </div>
              ))}
          </div>
          <div className="text-sm mt-5 md:mt-12">
            Neutram Geomatic Engineering is dedicated to providing comprehensive
            and tailored solutions that align with your unique project
            requirements and objectives. Contact us today to explore how our
            expertise can contribute to the success of your construction,
            surveying, engineering, or real estate venture.
          </div>
          <div>
            <Link
              className="float-left mt-5 bg-themeBlue text-sm font-bold uppercase text-white px-2 py-1 rounded"
              href={"#contact"}
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
