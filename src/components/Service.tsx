import Link from "next/link";
import React from "react";
import { MdOutlineConstruction } from "react-icons/md";
import { JsxElement } from "typescript";

interface props {
  service: string;
  icon: any;
  link: string
}

const Service = ({ service, icon, link }: props) => {
  return (
    <>
      <Link
        className="rounded p-4 bg-white flex flex-row items-center gap-4 hover:drop-shadow-lg min-h-[80px]"
        href={`/${link}`}
      >
        <img className="w-8" src={icon} alt="" />
        <div className="text-sm">{service}</div>
      </Link>
    </>
  );
};

export default Service;
