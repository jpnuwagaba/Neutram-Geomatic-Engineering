import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Location from "./Location";

const Footer = () => {
  return (
    <>
      <div className="py-8 md:py-16 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-start">
          <Link href={"/"}>
            <img
              className="w-40 lg:w-56"
              src="/assets/neutram-logo.png"
              alt="Neutram Geomatic Engineering"
            />
          </Link>
          <div className="flex flex-row gap-5 mt-6">
            <Link href={""}>
              <FaFacebookF size={"1.2rem"} />
            </Link>
            <Link href={""}>
              <BsTwitterX size={"1.2rem"} />
            </Link>
            <Link href={""}>
              <FaInstagram size={"1.2rem"} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"about"}>About</Link>
          <Link href={"services"}>Services</Link>
          <Link href={"projects"}>Projects</Link>
          <Link href={"jobBoard"}>Careers</Link>
          {/* <Link href={'contact'}>Contact</Link> */}
        </div>
        <div className="flex flex-col gap-4 w-max">
          <div className="rounded font-bold bg-themeBlue text-white py-2 px-4">
            (+256) 785 701 457
          </div>
          <Link
            href={""}
            className="rounded font-bold bg-themeBlue text-white py-2 px-4"
          >
            sample@mail.com
          </Link>
        </div>
      </div>
      {/* <hr className="my-5 border-themeBlue" />
      <Location /> */}
      <hr className="my-5 border-themeBlue" />
      <div className="text-sm flex flex-col items-center gap-5 lg:flex-row justify-between">
        <div className="font-bold">&copy; Neutram Geomatic Engineering</div>
        <div>All Rights Reserved | 2023</div>
      </div>
    </>
  );
};

export default Footer;
