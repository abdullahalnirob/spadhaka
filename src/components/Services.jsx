import React from 'react'
import aboutLeafe from '../assets/title-leafe.svg'
import hotStone from '../assets/hot-stone-spa.png'
import faceScrab from '../assets/face-scrab.png'
import oilMessage from '../assets/oil-message.png'
const Services = () => {
    return (
        <div className='my-20 px-10 md:px-20'>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='flex flex-col items-center justify-center mr-10'>
                    <div className='flex items-center' data-aos="fade-right">
                        <h2 className='font-LoveLight text-4xl text-[#41844d]' >Why Choose Us
                        </h2>
                        <img src={aboutLeafe} alt="" />
                    </div>
                    <h1 className='text-4xl my-5'>Our Spa Service</h1>
                </div>
                <p className='border-l-2 border-[#41844d] pl-10 text-sm md:w-1/2'>
                    Spa is most popular dolor amet, consectetur adipiscing elitet pellentesque risus nunc quis ut dolor, elit. Est amet ipsum velit Sit convallis elit justo, eu. Gravida amet, magna tincidunt.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
                <div className='flex flex-col items-center' data-aos="fade-up">
                    <img src={hotStone} alt="" />
                    <h1 className='my-4 text-3xl'>Hot Stone Spa</h1>
                    <h3>Start from $75</h3>
                </div>
                <div className='flex flex-col items-center my-10 md:my-0' data-aos="fade-up">
                    <img src={faceScrab} alt="" />
                    <h1 className='my-4 text-3xl'>Face Scrub</h1>
                    <h3>Start from $40</h3>
                </div>
                <div className='flex flex-col items-center' data-aos="fade-up">
                    <img src={oilMessage} alt="" />
                    <h1 className='my-4 text-3xl'>Oil Massage</h1>
                    <h3>Start from $35</h3>
                </div>
            </div>
        </div>
    )
}

export default Services
