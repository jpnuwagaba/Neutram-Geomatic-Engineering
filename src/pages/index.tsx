import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Services from '@/components/Services'
import HomeSection from '@/components/HomeSection'
import MissionVision from '@/components/MissionVision'
import AboutUsSection from '@/components/AboutUsSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import Projects from '@/components/Projects'
import CoreValues from '@/components/CoreValues'
import InfoSection from '@/components/InfoSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Neutram Geomatic Engineering</title>
        <link rel="icon" href="/neutram-icon.svg" />
        <meta
          name='description'
          content='Neutram Geomatic Engineering is a Land Surveying firm based in Uganda'
        />
        <meta name="keywords" content="Neutram, Geomatic, Engineering" />
      </Head>
      <HomeSection />
      <MissionVision />
      <AboutUsSection />
      <Services />
      <InfoSection
        title='we are a team'
        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aut perspiciatis hic error obcaecati ex officiis, vitae numquam id modi, nemo autem sed doloribus veritatis fuga cupiditate. Tempora officia possimus nobis incidunt enim velit laborum doloribus libero fugit ducimus similique suscipit, laboriosam, eaque eum aperiam impedit illum voluptates perferendis adipisci?'
        btnName='See More'
        btnLink=''
        textColor=''
        btnBorderColor='#2269e9'
      />

      {/* <CoreValues /> */}
      <Projects />
      <TestimonialSlider />
    </>
  )
}
