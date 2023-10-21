import React from "react";

const HomeSection = () => {
  return (
    <div className="py-24 relative bg-[url(/assets/image.webp)] bg-center bg-no-repeat bg-cover h-[50vh] md:h-[70vh]">
      <div className="container absolute z-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="text-white font-bold text-3xl md:text-5xl lg:text-6xl max-w-[600px]">
          Building Solutions For Your Future
        </div>
      </div>
      <div className="dark-overlay"></div>
    </div>
  );
};

export default HomeSection;
