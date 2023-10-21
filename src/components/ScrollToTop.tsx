import { useState, useEffect } from 'react'
import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollToTop = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  return (
    <a href='#' style={{ display: showScrollToTopButton ? 'block' : 'none' }} className='fixed bottom-10 right-10 shadow transition rounded-full bg-white'>
      <BsFillArrowUpCircleFill size={'2.5rem'} color='#2269e9'/>
    </a>
  )
}

export default ScrollToTop