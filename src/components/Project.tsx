import Link from "next/link";
import React from "react";

interface props {
  name?: string;
  category?: string;
  location?: string;
  text?: string;
  image?: any;
  link: string;
}

const Project = ({ name, category, text, location, image, link }: props) => {
  return (
    <>
      <Link href={link}>
        <div
          style={{
            background: `url(/assets/${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative min-h-[300px] rounded"
        >
          <div className="absolute z-20 bottom-0 left-0 bg-themeBlue p-3 rounded-b w-full">
            <div className="text-white text-xl font-bold">{name}</div>
            <div className="text-white text-sm">{location}</div>
          </div>
          <div className="absolute z-40 top-5 right-5 p-1 font-bold max-w-[70%] rounded bg-sky-50 text-xs uppercase text-themeBlue">
            {category}
          </div>
          <div className="absolute top-0 left-0 w-full h-full hover:bg-themeBlue/20 rounded z-50 transition ease-in-out duration-500"></div>
        </div>
      </Link>
    </>
  );
};

export default Project;
