import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

interface props {
  title: string,
  text: string,
  btnName: string,
  btnLink: string,
  textColor: string,
  btnBorderColor: string,
}

const InfoSection = ({title, text, btnName, btnLink, textColor, btnBorderColor}: props) => {
  return (
    <>
      <div className='py-6 lg:py-32'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 gap-6 md:gap-16'>
            <div style={{color: `${textColor}`}} className='xl:col-span-6'>
              <div className=" font-bold uppercase my-3">{title}</div>
              <div className="text-lg  text-justify">{text}</div>
              <Link style={{borderColor: `${btnBorderColor}`}} className="font-bold rounded-full px-6 py-2 my-6 border-2 border flex items-center gap-3 w-max hover:gap-5 ease-in-out duration-300" href={btnLink}>
                <div className='uppercase'>{btnName}</div>
                <BsArrowRight size={'1.5rem'}/>
              </Link>
            </div>
            <div className='xl:col-span-4'><img className='rounded-xl' src="/assets/construction-1.webp" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSection