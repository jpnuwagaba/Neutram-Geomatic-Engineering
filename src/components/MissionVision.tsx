import React from 'react'

const MissionVision = () => {
  return (
    <div className='py-16 container flex flex-col md:flex-row gap-4 '>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 to p-8 rounded-lg">
        <div className="font-bold text-white text-xl">Vision</div>
        <div className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates quibusdam similique, explicabo alias provident.</div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 to p-8 rounded-lg">
        <div className="font-bold text-white text-xl">Mission</div>
        <div className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates quibusdam similique, explicabo alias provident.</div>
      </div>
    </div>
  )
}

export default MissionVision