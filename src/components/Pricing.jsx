import React from 'react'
import aboutLeafe from '../assets/title-leafe.svg'
const Pricing = () => {
    return (
       <div className='grid justify-center items-center'>
         <div className=' my-44 px-0 md:px-20 ' style={{ overflowX: "hidden" }}>
            <div className='flex flex-col justify-center items-center text-center'>
                <h2 className='font-LoveLight text-5xl text-[#41844d] '>Our Pricing</h2>
                <h1 className='text-4xl my-8' data-aos="fade-up">Spa & Therapy Pricing</h1>
                <p className='text-xl w-1/2' data-aos="fade-up">
                    Best pricing for Spa & Therapy which is very reasonable and cost effective for all
                </p>
            </div>
            <div className='grid grid-cols-1 content-center lg:grid-cols-2 m-10 gap-10'>
                <div data-aos="fade-right" className='px-10 md:px-20 rounded-md ring-1 ring-[#7a7a7a] py-10'>
                    <div className='flex items-center flex-col'>
                        <img src={aboutLeafe} alt="" />
                        <h1 className='text-[#41844d] text-3xl my-6'>Spa Pricing</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>

                    </div>
                </div>
                <div data-aos="fade-left" className='px-10 md:px-20 rounded-md ring-1 ring-[#7a7a7a] py-10'>
                    <div className='flex items-center flex-col'>
                        <img src={aboutLeafe} alt="" />
                        <h1 className='text-[#41844d] text-3xl my-6'>Therapy Pricing</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>
                        <li className='m-3 text-[#41844d] list-none'>Hot Stone Spa -------- $75</li>

                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Pricing
