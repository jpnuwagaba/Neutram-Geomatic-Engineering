import React from 'react'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import InfoSection from '@/components/InfoSection'
import Team from '@/components/Team'

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering, About" />
      </Head>
      <div className='bg-themeBlue'>
        <PageHeader title='about us' bg={'about.avif'} />
        <InfoSection
          title='where we started'
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aut perspiciatis hic error obcaecati ex officiis, vitae numquam id modi, nemo autem sed doloribus veritatis fuga cupiditate. Tempora officia possimus nobis incidunt enim velit laborum doloribus libero fugit ducimus similique suscipit, laboriosam, eaque eum aperiam impedit illum voluptates perferendis adipisci?'
          btnName='see full story'
          btnLink=''
          textColor='white'
          btnBorderColor='white'
        />
        <Team />
      </div>
    </>
  )
}

export default aboutUs