import React from "react";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import InfoSection from "@/components/InfoSection";

const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name="description"
          content="Neutram Geomatic Engineering is a Land Surveying firm based in Uganda"
        />
        <meta
          name="keywords"
          content="Neutram, Geomatic, Engineering, Careers"
        />
      </Head>
      <div className="">
        <PageHeader title="work at nge" bg={"assets/culture.webp"} />
        <div className="py-12 md:py-24 lg:py-36">
          <div className="container">
            <div className="text-2xl font-bold mb-12 ">
              Life at Neutram Geomatic Engineering
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <TopicCard
                image="culture.webp"
                topic="Culture"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam."
                link="/careers/culture"
              />
              <TopicCard
                image="diversity.jpg"
                topic="Diversity and Inclusivity"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam."
                link="/careers/diversity"
              />
              <TopicCard
                image="jobs.jpg"
                topic="Jobs"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam."
                link="/careers/jobs"
              />
            </div>
          </div>
          <InfoSection
            title="the onboarding process"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aut perspiciatis hic error obcaecati ex officiis, vitae numquam id modi, nemo autem sed doloribus veritatis fuga cupiditate. Tempora officia possimus nobis incidunt enim velit laborum doloribus libero fugit ducimus similique suscipit, laboriosam, eaque eum aperiam impedit illum voluptates perferendis adipisci?"
            btnName="See More"
            btnLink="/careers/onboarding"
            textColor=""
            btnBorderColor="#2269e9"
            bgImage={"culture.webp"} tag={""} bgColor={""}          />
        </div>
      </div>
    </>
  );
};

export default careers;
