import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface props {
  title: string;
  text: string;
  tag: string;
  btnName: string;
  btnLink: string;
  textColor: string;
  btnBorderColor: string;
  bgImage: any;
  bgColor: string;
}

const InfoSection = ({
  title,
  text,
  tag,
  btnName,
  btnLink,
  textColor,
  btnBorderColor,
  bgImage,
  bgColor,
}: props) => {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 md:py-24">
        <div>
          <div className="text-sm font-bold text-gray-700 uppercase">
            {title}
          </div>
          <div className="font-bold text-3xl my-4">{tag}</div>
          <div className="text-gray-700 mb-5">{text}</div>
          <Link
            className="bg-themeBlue text-sm font-bold uppercase text-white px-2 py-1 rounded"
            href={btnLink}
          >
            {btnName}
          </Link>
        </div>
        <div
          style={{
            background: `url(/assets/${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded min-h-[50vh] md:min-h-[70vh]"
        ></div>
      </div>
    </>
  );
};

export default InfoSection;
