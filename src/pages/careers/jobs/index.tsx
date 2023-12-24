import React from 'react'
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'

const index = () => {
  return (
    <>
      <Head>
        <title>Jobs | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering" />
      </Head>
      <div>
        <div className="container">
        <SectionHeader 
            title='Jobs'
            text='Visit our Jobs page to find out more about current openings and how you can join Neutrum Geomatic Eng Ltd. in shaping the future of geomatic engineering '
            image={'jobs.jpg'}
          />
        </div>
      </div>
    </>
  )
}

export default index