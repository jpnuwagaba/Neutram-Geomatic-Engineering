import React from 'react'
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'

const index = () => {
  return (
    <>
      <Head>
        <title>Culture | Neutram Geomatic Engineering</title>
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
            title='Culture'
            text='At Neutrum Geomatic Eng Ltd., we foster a culture of innovation, collaboration, and continuous learning. We value open communication, respect for diverse perspectives, and a strong work ethic. Our culture is rooted in integrity, professionalism, and a commitment to delivering excellence in all aspects of our work.'
            image={'culture.webp'}
          />
        </div>
      </div>
    </>
  )
}

export default index