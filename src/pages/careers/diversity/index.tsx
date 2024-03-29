import React from "react";
import Head from "next/head";
import SectionHeader from "@/components/SectionHeader";

const index = () => {
  return (
    <>
      <Head>
        <title>Diversity and Inclusivity | Neutram Geomatic Engineering</title>
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
            title="Diversity and Inclusivity"
            text="At Neutrum, we promote an environment that values and respects different backgrounds, experiences and perspectives. We aim to create a more vibrant and dynamic industry because we believe that a diverse and inclusive workforce enhances creativity, innovation and problem-solving capabilities."
            image={"diversity.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default index;
