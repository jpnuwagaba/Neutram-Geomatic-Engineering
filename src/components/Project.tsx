import Link from 'next/link'
import React from 'react'

interface props {
  name: string,
  category: string,
  location: string,
  text: string,
  image: any,
  link: string,
}

const Project = ({ name, category, text, location, image, link }: props) => {
  return (
    <>
      <Link href={link} className="shadow-md hover:translate-y-[-3px] transition">
        <div
          style={{
            backgroundImage: `url(/assets/${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          className="h-36 rounded-t-md"></div>
        <div className="rounded-b-md p-8">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-sm text-gray-600 font-bold uppercase my-2">{location}</div>
          <div className='mb-6 mt-5'>{text}</div>
          <Link href={link} className='border-themeBlue border-2 text-themeBlue uppercase text-sm px-4 py-2 rounded-md hover:bg-themeBlue hover:text-white transition ease-in-out'>See Project</Link>
        </div>
      </Link>
    </>
  )
}

export default Project