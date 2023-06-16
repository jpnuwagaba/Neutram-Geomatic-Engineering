import React from 'react'

interface props {
  name: string,
  role: string,
  image: any
}

const TeamMember = ({ name, role, image }: props) => {
  return (
    <div className='bg-gray-200 drop-shadow-lg rounded-lg'>
      <div className="grid grid-cols-1 items-center">
        <div
          style={{
            backgroundImage: `url(/assets/${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          className="aspect-square rounded-t-lg"></div>
        <div className='text-center py-5'>
          <div className='font-bold'>{name}</div>
          <div className="text-sm">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember