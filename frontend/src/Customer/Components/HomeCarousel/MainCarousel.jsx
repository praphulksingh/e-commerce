import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = MainCarouselData.map((items)=> <img className='cursor-pointer w-screen h-[400px]' role='presentation' src={items.image} alt="" /> )

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite

/>
  )
}

export default MainCarousel