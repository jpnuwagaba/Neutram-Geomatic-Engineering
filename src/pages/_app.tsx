import '@/styles/globals.css'
import '@/styles/fonts.css'


import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='font-manrope'>
        <Navbar />
        <div className='min-h-screen'><Component {...pageProps} /></div>
        <div className='py-6 bg-gray-100 text-themeBlue w-full'>
          <div className='container'><Footer /></div>
        </div>
        <ScrollToTop />
      </div>
    </>
  )
}
