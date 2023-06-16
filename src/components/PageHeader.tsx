import React from 'react'

interface props {
  title: string,
  bg: any
}

const PageHeader = ({title, bg}: props) => {
  return (
    <div>
      <div
        style={{
          background: `url(/assets/${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className='w-full h-[50vh] relative'>
          <div className="container h-full relative">
            <div className="text-xl bg-themeBlue py-2 px-4 text-gray-100 uppercase absolute z-50 bottom-0">{title}</div>
          </div>
          <div className="absolute w-full h-full top-0 left-0 bg-gray-700 z-10 opacity-40"></div>
      </div>
    </div>
  )
}

export default PageHeader