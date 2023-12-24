import Link from "next/link";
import React from "react";

interface props {
  image: string;
  topic: string;
  text: string;
  link: string;
}

const TopicCard = ({ image, topic, text, link }: props) => {
  return (
    <>
      <Link href={`${link}`}>
        <div className="grid grid-cols-1 items-center max-w-[350px] shadow-md hover:shadow-xl rounded-md w-full">
          <div
            style={{
              backgroundImage: `url(/assets/${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-44 rounded-t-md w-full"
          ></div>
          <div className="p-6">
            <div className="text-lg font-bold">{topic}</div>
            <div>{text.slice(0, 90)}...
              <div className="text-sm text-themeBlue underline">see more</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopicCard;
