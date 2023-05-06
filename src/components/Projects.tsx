import React from 'react'
import Project from './Project'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'

const Projects = () => {
  return (
    <>
      <div className='container py-16'>
        <div className="flex flex-row justify-between mb-6">
          <div className='font-bold text-themeBlue text-2xl'>Projects</div>
          <Link href={''} className='flex flex-row gap-3 hover:translate-x-[-3px] transition'>
            <BsArrowRightCircle size={'1.5rem'} color='#2269e9'/>
            <div className='font-bold text-gray-600'>All Projects</div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Project
            name='Kyambogo University'
            location='kampala uganda'
            category='Engineering Survey'
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam.'
            image={'construction-1.webp'}
            link=''
          />
          <Project
            name='Kyambogo University'
            location='kampala uganda'
            category='Engineering Survey'
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam.'
            image={'construction-2.jpeg'}
            link=''
          />
          <Project
            name='Kyambogo University'
            location='kampala uganda'
            category='Engineering Survey'
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eos natus molestiae iusto omnis numquam.'
            image={'construction-3.jpg'}
            link=''
          />
        </div>
      </div>
    </>
  )
}

export default Projects