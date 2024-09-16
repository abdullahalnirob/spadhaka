import React from 'react'
import HeroImg from '../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='md:flex md:px-0  items-center md:justify-between'>
      <div className='md:w-2/3 md:pl-20 mt-7 px-10 '>
        <h3 className='text-[#41844d] font-LoveLight text-3xl md:text-5xl' data-aos="fade-up">Spa Treatment</h3>
        <h1 data-aos="fade-up" data-aos-duration="1100" className='my-5 text-5xl md:text-8xl text-[#393939]'>Stress Relieving Experience
        </h1>
        <div data-aos="fade-up" data-aos-duration="1500" className='mt-10 justify-between md:justify-normal flex items-center text-xl'>
          <button className='bg-[#41844d] md:mr-7 text-white text-[15px] md:text-xl px-4 py-3 md:px-7 md:py-4 rounded-full hover:transform duration-300 hover:-translate-y-2'>Book Now</button>
          <p className='text-[16px] md:text-xl text-[#41844d] font-["LibreBaskerville"] '>Call now -010000000</p>
        </div>
      </div>
      <img src={HeroImg} className='px-0 mt-10 md:mt-0 w-[600px] md:w-[40%]' />
    </div>
  )
}

export default Hero
