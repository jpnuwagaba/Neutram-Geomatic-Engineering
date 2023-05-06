import React from 'react'
import Service from './Service'
import {SiOpenstreetmap} from 'react-icons/si'
import {MdArchitecture, MdOutlineEngineering, MdOutlinePriceChange} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {BiBuildings} from 'react-icons/bi'
import {TbZoomMoney} from 'react-icons/tb'

const Services = () => {
  return (
    <>
      <div className="container flex flex-col py-16 gap-6 items-center ">
        <div className="text-gray-700 font-bold text-3xl">Our Services</div>
        <div className="grid md:grid-cols-2 gap-3">
          <Service service={'Surveying'} image={'assets/civil-engineering.svg'} />
          <Service service={'Civil Engineering'} image={'assets/engineering-helmet.svg'} />
          <Service service={'Architecture'} image={'assets/architecture.svg'} />
          <Service service={'Project Planning and Management'} image={'assets/project.svg'} />
          <Service service={'Real Estate'} image={'assets/real-estate.svg'} />
          <Service service={'Property Valuation'} image={'assets/bar-chart.svg'} />
          <Service service={'Quantity Surveying and Cost Planning'} image={'assets/product-quantity.svg'}/>
        </div>
      </div>
    </>
  )
}

export default Services