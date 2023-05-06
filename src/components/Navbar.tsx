import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <>
      <div className='py-5 shadow-sm'>
        <div className='flex flex-row justify-between items-center container'>
          <Link href={'/'}><img className='w-40 lg:w-56' src="/assets/neutram-logo.png" alt="Neutram Geomatic Engineering" /></Link>
          <div className="hidden flex flex-row gap-8 items-center text-sm font-bold lg:flex">
            <Link href={'/'}>Home</Link>
            <Link href={'aboutUs'}>About Us</Link>
            <Link href={'services'}>Services</Link>
            <Link href={'jobBoard'}>Job Board</Link>
            <Link href={'contact'}>Contact</Link>
          </div>
          <Link href={''} className="hidden text-sm rounded-md bg-themeBlue px-3 py-2 text-white lg:block">sample@gmail.com</Link>
          <div onClick={() => setShowMenu(!showMenu)} className='lg:hidden'>{showMenu ? <AiOutlineMenu size={'1.5rem'} color='#2269e9' /> : <AiOutlineClose size={'1.5rem'} color='#2269e9' />}</div>
        </div>
      </div>
      <div 
      style={showMenu ? {display: 'none'} : {display: 'block'}}
      className='py-8 shadow-sm'>
        <div className="flex flex-col gap-5 items-center">
          <Link onClick={() => setShowMenu(!showMenu)} href={'/'}>Home</Link>
          <Link onClick={() => setShowMenu(!showMenu)} href={'aboutUs'}>About Us</Link>
          <Link onClick={() => setShowMenu(!showMenu)} href={'services'}>Services</Link>
          <Link onClick={() => setShowMenu(!showMenu)} href={'jobBoard'}>Job Board</Link>
          <Link onClick={() => setShowMenu(!showMenu)} href={'contact'}>Contact</Link>
          <Link onClick={() => setShowMenu(!showMenu)} href={''} className="text-sm rounded-md bg-themeBlue px-3 py-2 text-white lg:block">sample@gmail.com</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar