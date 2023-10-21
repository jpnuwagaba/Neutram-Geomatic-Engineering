import Link from "next/link";
import React from "react";

interface props {
  name: string;
  role: string;
  link: string;
  image: any;
}

const TeamMember = ({ name, role, image, link }: props) => {
  return (
    <>
      <Link href={link}
        style={{
          background: `url(/assets/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="aspect-square relative"
      >
        <div className="absolute z-50 bottom-0 left-0 w-full bg-white py-3 text-center">
          <div className="flex flex-col items-center gap-1">
            <div className="font-bold text-themeBlue">{name}</div>
            <div className="text-xs">{role}</div>
          </div>
        </div>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-themeBlue/0 hover:bg-themeBlue/25 transition ease-in-out duration-500"></div>
      </Link>
    </>
  );
};

export default TeamMember;
