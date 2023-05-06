import React from 'react'

const HomeSection = () => {
  return (
    <div className='py-24 relative bg-[url(/assets/image.webp)] bg-center bg-no-repeat bg-cover h-[50vh] md:h-[70vh]'>
      <div className="container absolute z-50 left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%]">
        <div className="text-white font-bold text-3xl md:text-5xl lg:text-6xl">Building Solutions For Your Future</div>
        <div className='font-bold text-white mt-5 mb-8'>From planning to execution, we're committed to delivering sustainable industry solutions</div>
        <div className="rounded-lg text-white border-2 border-white inline px-5 py-3 text-sm uppercase cursor-pointer hover:text-gray-200 hover:border-gray-200">Request Quotation</div>
      </div>
      <div className="dark-overlay"></div>
    </div>
  )
}

export default HomeSection