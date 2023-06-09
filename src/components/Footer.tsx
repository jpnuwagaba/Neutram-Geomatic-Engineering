import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='text-sm flex flex-col items-center gap-5 lg:flex-row justify-between'>
        <div className="font-bold">&copy; Neutram Geomatic Engineering</div>
        <div className="flex flex-col items-center lg:flex-row gap-5">
          <Link href={'/'}>Home</Link>
          <Link href={'about'}>About</Link>
          <Link href={'careers'}>Services</Link>
          <Link href={'jobBoard'}>Careers</Link>
          <Link href={'contact'}>Contact</Link>
        </div>
        <div>All Rights Reserved | 2023</div>
      </div>
    </>
  )
}

export default Footer