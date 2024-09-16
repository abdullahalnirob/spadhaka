import React from 'react'
import TestimonialImg from '../assets/testimonial-image.png'
import aboutLeafe from '../assets/title-leafe.svg'

const Testimonials = () => {
  return (
    <div className='flex flex-col md:flex-row my-28 px-10 md:px-20 items-center justify-between'>
      <img src={TestimonialImg} className="my-10" data-aos="zoom-in" />
      <div className='md:w-2/3 md:ml-10'>
        <div className='flex items-center ' data-aos="fade-right">
          <h2 className='font-LoveLight text-4xl text-[#41844d]' >Testimonials
          </h2>
          <img src={aboutLeafe} alt="" />
        </div>
        <h1 className='text-4xl my-4'>Client’s Expression</h1>
        <p className='text-[#3f3f3f]'>Find here what our happy clients says about us with their satisfaction, which is our main goal</p>
        <h1 className='my-7'>I highly recommend Belluri!</h1>
Spa is most popular dolor amet, consectetur adipiscing elit. Sed et pellentesque risus nunc quis uet dolor more Est amet ipsum velit are Sit convallis elit justo, same Gravida amet, magna tincidunt
      </div>
    </div>
  )
}

export default Testimonials
