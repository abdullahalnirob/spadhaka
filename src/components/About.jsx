import React from 'react'
import aboutImg from '../assets/about.png'
import aboutLeafe from '../assets/title-leafe.svg'
import aboutDesign from '../assets/about-design-1.svg'
const About = () => {
    return (
        <div className='py-20 md:py-0 flex flex-col md:flex-row justify-between items-center px-10' style={{overflowX:"hidden"}}>
            <img src={aboutImg} alt=""  data-aos="fade-right"/>
            <div className='block px-0 md:px-16'>
                <div className='flex items-center'>
                    <h2 className='font-LoveLight text-4xl text-[#41844d]'>Welcome to Belluri</h2>
                    <img src={aboutLeafe} alt=""/>
                </div>
                <h1 className='text-5xl'>Natural & Relaxiable</h1>
                <h3 className='my-5'>We have more than 25 years of Exprience and Provide best Spa service with 100% clients Satisfaction.</h3>
                <p data-aos="fade-up" data-aos-duration="700" className='text-[#696969] border-l-2 border-[#41844d] pl-3'>
                    Spa is most popular dolor amet, consectetur adipiscing elit. Sed et pellentesque risus nunc quis ut dolor, elit. Est amet ipsum velit are Sit convallis elit justo, eu. Gravida amet, magna tincidunt ut vitae. ut lorem morbi lorem. Leo, neque, purus sed nunc semper
                </p>
                <div className='flex items-center'>
                    <button className='bg-[#41844d] mr-7 text-white text-[15px] px-4 py-3 md:px-7 md:py-4 rounded-full hover:transform duration-300 hover:-translate-y-2 mt-9'>Lear More</button>
                    <img src={aboutDesign} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
