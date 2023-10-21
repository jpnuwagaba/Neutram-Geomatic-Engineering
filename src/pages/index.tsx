import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Services from "@/components/Services";
import HomeSection from "@/components/HomeSection";
import MissionVision from "@/components/MissionVision";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Projects from "@/components/Projects";
import CoreValues from "@/components/CoreValues";
import InfoSection from "@/components/InfoSection";
import ProjectBigCard from "@/components/ProjectBigCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name="description"
          content="Neutram Geomatic Engineering is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering" />
      </Head>
      <HomeSection />
      <MissionVision />
      <InfoSection
        title="nge in brief"
        text="Welcome to Neutrum Geomatic Engineering Ltd., where dreams find their foundation and ideas take shape in reality. Established in June 2022 and officially incorporated in March 2023, we are the result of a passionate merger between a young, talented team of surveyors, engineers, and architects."
        tag="An overview of Neutram Geomatic Engineering"
        btnName="See More"
        btnLink="about"
        textColor=""
        btnBorderColor="#2269e9"
        bgImage={"team.jfif"}
        bgColor="#10870c"
      />
      <Services />
      <div className="flex flex-row items-center justify-between container pb-5 pt-8 md:pb-8 md:pt-16">
        <div className="font-bold md:text-2xl text-themeBlue ">
          Project Showcase
        </div>
        <div className="flex flex-row items-center gap-1">
          <Link className="text-sm uppercase hover:text-themeBlue" href={"/projects"}>
            all projects
          </Link>
          <img className="w-[18px]" src="/assets/link.svg" alt="" />
        </div>
      </div>
      <ProjectBigCard
        image={"construction-3.jpg"}
        category={"Quantity Surveying and Cost Planning"}
        name={"Arua Mall BOQ and Costing"}
        link={""}
      />
      <Projects />
      <InfoSection
        title="we are a team"
        text="We are a team of young, dedicated and highly trained surveyors driven by a shared passion for excellence and a collaborative approach to problem solving."
        tag="Working with us"
        btnName="See More"
        btnLink="/careers"
        textColor=""
        btnBorderColor="#2269e9"
        bgImage={"team.jpg"}
        bgColor="#2269e9"
      />
      {/* <TestimonialSlider /> */}
    </>
  );
}
