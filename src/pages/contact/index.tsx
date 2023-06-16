import React from 'react'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering, Contact" />
      </Head>
      <div className=''>
        <PageHeader title='contact us' bg={'about.avif'}/>
      </div>
    </>
  )
}

export default contact