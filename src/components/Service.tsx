import Link from 'next/link'
import React from 'react'
import {MdOutlineConstruction} from 'react-icons/md'
import { JsxElement } from 'typescript'

interface props {
  service: string,
  // icon: any,
  image: any,
}

const Service = ({service, image}: props) => {
  return (
    <>
      <Link href={''} className="rounded-md p-5 lg:p-8 flex flex-row gap-5 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer hover:translate-y-[-3px] transition ease-in-out ">
        {/* <div>{icon}</div> */}
        <img className='w-12' src={image} alt="" srcSet="" />
        <div className='text-themeBlue font-bold text-xl'>{service}</div>
      </Link>
    </>
  )
}

export default Service