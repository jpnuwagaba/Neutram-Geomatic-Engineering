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
                text="At Neutrum Geomatic Eng Ltd., we foster a culture of innovation, collaboration, and continuous learning. We value open communication, respect for diverse perspectives, and a strong work ethic. Our culture is rooted in integrity, professionalism, and a commitment to delivering excellence in all aspects of our work."
                link="/careers/culture"
              />
              <TopicCard
                image="diversity-pencils.avif"
                topic="Diversity and Inclusivity"
                text="At Neutrum, we promote an environment that values and respects different backgrounds, experiences and perspectives. We aim to create a more vibrant and dynamic industry because we believe that a diverse and inclusive workforce enhances creativity, innovation and problem-solving capabilities."
                link="/careers/diversity"
              />
              <TopicCard
                image="jobs.jpg"
                topic="Jobs"
                text="Visit our Jobs page to find out more about current openings and how you can join Neutrum Geomatic Eng Ltd. in shaping the future of geomatic engineering"
                link="/careers/jobs"
              />
              <TopicCard
                image="jobs.jpg"
                topic="Expertise and Specializations"
                text="At Neutrum Geomatic Engineering Ltd, our team boasts diverse expertise in the built environment, covering surveying, civil engineering, architecture, project planning, real estate, quantity surveying, and more. By leveraging cutting-edge technology and sustainable practices, we deliver innovative solutions that transform dreams into reality and positively impact communities worldwide"
                link="/careers/expertise"
              />
            </div>
          </div>
          <InfoSection
            title="the onboarding process"
            text="Our onboarding process is designed to ensure a seamless transition as you embark on this exciting journey with us. During your onboarding, you'll have the opportunity to familiarize yourself with our company culture, mission, and values. We'll provide you with the necessary tools, resources, and support to thrive in your role. Our team is here to guide you through every step, helping you integrate smoothly into the Neutram family. Your success is our priority, and we look forward to witnessing the unique contributions you'll bring to our innovative and dynamic workplace. Let's build the future of geomatic engineering together!"
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
