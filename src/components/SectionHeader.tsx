import React from 'react'

interface props {
  title: string,
  text: string,
  image: any
}

const PageHeaderTwo = ({title, text, image}: props) => {
  return (
    <>
      <div className="flex flex-col justify-between my-16 lg:my-24 lg:flex-row">
        <div className="text-3xl font-bold mb-6 lg:w-[40%]">{title}</div>
        <div className='text-lg lg:w-[70%]'>{text}</div>
      </div>
      <div 
        style={{
          background: `url(/assets/${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      className="rounded-lg h-[50vh] w-full"></div>
    </>
  )
}

export default PageHeaderTwo