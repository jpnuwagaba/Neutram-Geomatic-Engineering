import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div className='bg-[#ffffff]'>
      <div className="container py-16">
        <div className="font-bold text-lg text-themeBlue uppercase border-b-2 border-themeBlue inline-block py-1">our core team</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-5">
          <TeamMember 
            name='Morris Olanya'
            role='Managing Partner'
            image={'profile.jpg'}
          />
          <TeamMember 
            name='Hudson Kyambadde'
            role='Managing Partner'
            image={'profile.jpg'}
          />
          <TeamMember 
            name='Moses Lukenge'
            role='Managing Partner'
            image={'profile.jpg'}
          />
        </div>
      </div>
    </div>
  )
}

export default Team