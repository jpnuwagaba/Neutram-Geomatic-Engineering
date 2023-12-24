import React from 'react'
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'

const index = () => {
  return (
    <>
      <Head>
        <title>Onboarding | Neutram Geomatic Engineering</title>
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
            title='Onboarding Process'
            text="Our onboarding process is designed to ensure a seamless transition as you embark on this exciting journey with us. During your onboarding, you'll have the opportunity to familiarize yourself with our company culture, mission, and values. We'll provide you with the necessary tools, resources, and support to thrive in your role. Our team is here to guide you through every step, helping you integrate smoothly into the Neutram family. Your success is our priority, and we look forward to witnessing the unique contributions you'll bring to our innovative and dynamic workplace. Let's build the future of geomatic engineering together!"
            image={'culture.webp'}
          />
        </div>
      </div>
    </>
  )
}

export default index