import React from 'react'

const TestimonialSlider = () => {
  return (
    <>
      <div className='my-6 lg:my-16'>
        <div className=' container'>
          <div className='text-center my-5'>
            <div className="text-3xl text-gray-700 font-bold my-3">Testimonial</div>
            <div className="text-gray-500 uppercase font-bold">what our clients say</div>
          </div>
          <div className="w-full mx-auto rounded-lg flex flex-col items-center py-16 lg:py-24 px-5 bg-blue-100">
            <div
              style={{
                background: `url(/assets/jpnuwagaba.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              className='w-32 lg:w-44 h-32 lg:h-44 aspect-square rounded-full mb-6'></div>
            <div className="text-xl lg:text-2xl lg:w-[60%] text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit numquam dolorum illo, suscipit a aspernatur?</div>
            <div className="text-xl font-bold mt-3">John Peter Nuwagaba</div>
            <div className="text-sm text-gray-700 uppercase">client, land surveying</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSlider