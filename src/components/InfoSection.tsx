import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const InfoSection = () => {
  return (
    <>
      <div className='py-6 lg:py-32'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 gap-6 md:gap-16'>
            <div className='xl:col-span-6'>
              <div className="text-themeBlue font-bold my-3">Info Section</div>
              <div className="text-lg text-gray-700 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aut perspiciatis hic error obcaecati ex officiis, vitae numquam id modi, nemo autem sed doloribus veritatis fuga cupiditate. Tempora officia possimus nobis incidunt enim velit laborum doloribus libero fugit ducimus similique suscipit, laboriosam, eaque eum aperiam impedit illum voluptates perferendis adipisci?</div>
              <Link className="font-bold rounded-full px-6 py-2 my-6 border-2 border-themeBlue flex items-center gap-3 w-max text-themeBlue hover:bg-themeBlue hover:text-white transition" href={''}>
                <div>Explore</div>
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