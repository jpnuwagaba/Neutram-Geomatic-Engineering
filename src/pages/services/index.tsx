import PageHeader from '@/components/PageHeader'
import Services from '@/components/Services'
import Head from 'next/head'
import React from 'react'

const services = () => {
  return (
    <>
      <Head>
        <title>Services | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering, Contact" />
      </Head>
      <div className=''>
        <PageHeader title='services' bg={'assets/construction-1.webp'}/>
        <Services />
      </div>
    </>
  )
}

export default services