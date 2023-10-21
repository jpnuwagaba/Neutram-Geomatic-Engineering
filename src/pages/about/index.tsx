import React from "react";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";
import InfoSection from "@/components/InfoSection";
import Team from "@/components/Team";

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name="description"
          content="Neutram Geomatic Engineering is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering, About" />
      </Head>
      <div className="">
        <PageHeader title="about us" bg={"assets/about.avif"} />
        {/* <InfoSection
          title='where we started'
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aut perspiciatis hic error obcaecati ex officiis, vitae numquam id modi, nemo autem sed doloribus veritatis fuga cupiditate. Tempora officia possimus nobis incidunt enim velit laborum doloribus libero fugit ducimus similique suscipit, laboriosam, eaque eum aperiam impedit illum voluptates perferendis adipisci?'
          btnName='see full story'
          btnLink=''
          textColor='white'
          btnBorderColor='white' tag={''} bgImage={undefined} bgColor={''}        /> */}
        <div className="container my-8 md:my-16">
          <div className="text-3xl text-themeBlue font-bold mb-4">
            Our Story
          </div>
          <div className="flex flex-col gap-4">
          <p className="text-lg text-justify">
            Welcome to Neutrum Geomatic Engineering Ltd., where dreams find
            their foundation and ideas take shape in reality. Established in
            June 2022 and officially incorporated in March 2023, we are the
            result of a passionate merger between a young, talented team of
            surveyors, engineers, and architects.
          </p>
          <p className="text-lg text-justify">
            As former classmates at the university, pursuing degrees in
            Surveying and Land Information Systems, our founders, Hudson
            Kyambadde, Moses Lukenge, and Morris Olanya, envisioned a company
            that could turn their expertise into a force for positive change in
            the built environment. With backgrounds in Cartography, Land
            Surveying, and Quantity Surveying, we saw the potential to make a
            lasting impact.
          </p>
          <p className="text-lg text-justify">
            We knew that with our education and dedication, we could take on any
            challenge in the field. And so, Neutrum was born, with the mission
            to empower the world, transforming dreams into blueprints, and
            leaving a mark of excellence in every project we undertake.
          </p>
          <p className="text-lg text-justify">
            Today, we stand proud of where we started, and we can't wait to
            embark on this journey with you. Join us as we shape the future of
            engineering, surveying, and architecture, one project at a time.
          </p>
          </div>
        </div>
        <Team />
      </div>
    </>
  );
};

export default aboutUs;
