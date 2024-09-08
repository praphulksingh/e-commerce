import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../Data/mensKurta";

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Pants"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's saree"} />
        </div>
    </div>
  )
}

export default HomePage
