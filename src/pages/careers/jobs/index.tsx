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
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus nostrum harum distinctio, quibusdam debitis quae vel. Recusandae eum nihil fugit magnam doloribus omnis praesentium, id impedit debitis tempora! Vitae voluptates quasi dolor corporis quam asperiores similique, fugiat impedit eveniet.'
            image={'jobs.jpg'}
          />
        </div>
      </div>
    </>
  )
}

export default index