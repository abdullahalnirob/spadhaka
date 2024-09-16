import React from 'react'
import Marquee from "react-fast-marquee";
import brand1 from '../assets/Brands/brand-image-1.png'
import brand2 from '../assets/Brands/brand-image-2.png'
import brand3 from '../assets/Brands/brand-image-3.png'
import brand4 from '../assets/Brands/brand-image-4.png'
import brand5 from '../assets/Brands/brand-image-5.png'
const Brands = () => {
  return (
    <div className='my-36'>
      <Marquee>
        <img src={brand1} className='px-10 md:px-20' alt="" />
        <img src={brand2} className='px-10 md:px-20' alt="" />
        <img src={brand3} className='px-10 md:px-20' alt="" />
        <img src={brand4} className='px-10 md:px-20' alt="" />
        <img src={brand5} className='px-10 md:px-20' alt="" />
      </Marquee>
    </div>
  )
}

export default Brands
