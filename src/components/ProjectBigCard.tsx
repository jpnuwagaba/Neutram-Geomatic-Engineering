import Link from "next/link";
import React from "react";

interface props {
  image: any;
  category: string;
  name: string;
  link: string;
}

const ProjectBigCard = ({ image, category, name, link }: props) => {
  return (
    <>
      <div className="container bg-sky-50 rounded h-[85vh] p-3 md:p-8">
        <div
          style={{
            background: `url(/assets/${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded p-6 h-full relative z-10"
        >
          <div className="z-50">
            <div className="text-sm font-bold text-themeBlue uppercase">
              {category}
            </div>
            <div className="font-bold text-3xl text-white my-3">{name}</div>
            <Link
              className="rounded px-2 py-1 text-sm border-white border-[1px] text-white text-center"
              href={link}
            >
              Read more
            </Link>
          </div>
          <div className="absolute rounded -z-10 top-0 left-0 w-full h-full bg-black/25"></div>
        </div>
      </div>
    </>
  );
};

export default ProjectBigCard;
