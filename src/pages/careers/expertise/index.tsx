import React from "react";
import Head from "next/head";
import SectionHeader from "@/components/SectionHeader";

const index = () => {
  return (
    <>
      <Head>
        <title>Expertise and Specialization | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name="description"
          content="Neutram Geomatic Engineering is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering" />
      </Head>
      <div>
        <div className="container">
          <SectionHeader
            title="Expertise and Specialization"
            text="At Neutrum Geomatic Engineering Ltd, our team boasts diverse expertise in the built environment, covering surveying, civil engineering, architecture, project planning, real estate, quantity surveying, and more. By leveraging cutting-edge technology and sustainable practices, we deliver innovative solutions that transform dreams into reality and positively impact communities worldwide."
            image={"jobs.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default index;
