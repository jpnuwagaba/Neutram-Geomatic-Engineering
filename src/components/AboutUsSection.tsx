import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const AboutUsSection = () => {
  return (
    <div className='py-5 lg:py-16'>
      <div className='container flex flex-col items-center'>
        <div className="text-gray-500 text-sm uppercase font-bold">neutram geomatic engineering overview</div>
        <div className="text-3xl text-gray-700 font-bold my-3">Where we started</div>
        <div className='container text-center text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolor porro ullam cupiditate reiciendis itaque facere. Autem nulla impedit eveniet? Nemo quam enim vitae minima, vel reiciendis ea consectetur quidem sed suscipit odio, beatae repellat voluptate, inventore quas provident harum velit! Voluptatibus consequatur ab architecto?</div>
        <Link className="font-bold rounded-full px-6 py-2 text-themeBlue my-6 border-2 border-themeBlue flex items-center gap-3 w-max hover:bg-themeBlue hover:text-white transition" href={''}>
          <div>See more</div>
          <BsArrowRight size={'1.5rem'} />
        </Link>
      </div>
    </div>
  )
}

export default AboutUsSection