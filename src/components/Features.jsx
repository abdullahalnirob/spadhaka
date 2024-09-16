import React from 'react'
import aboutLeafe from '../assets/title-leafe.svg'
import fe from '../assets/fe.png'
const Features = () => {
    return (
        <div style={{ overflowX: "hidden" }} className='flex  my-28 flex-col-reverse md:flex-row items-center justify-between px-10 sm:px-10 md:px-20'>
            <div>
                <div className='flex items-center' data-aos="fade-right">
                    <h2 className='font-LoveLight text-4xl text-[#41844d]' >Why Choose Us
                    </h2>
                    <img src={aboutLeafe} alt="" />
                </div>
                <h1 data-aos="fade-right" className='text-4xl my-5'>We are different because...</h1>
                <p>
                    Always provide best quality elements for Spa & therapy, which can differ us from other Spa Center with clients Satisfaction.
                </p>
                <div className='flex flex-col' style={{ overflowY: "hidden" }}>
                    <div className='grid grid-cols-2 gap-10 md:gap-5 my-3' data-aos="fade-up">
                        <div className='md:pr-20 py-5'>
                            <h1 className='text-[#41844d] text-xl md:text-2xl my-2'>Natural Herbs</h1>
                            <p className='text-sm'>
                                Oil therapy most populare nunc quis dolor convallis
                            </p>
                        </div>
                        <div className='md:pr-20 py-5'>
                            <h1 className='text-[#41844d] text-2xl my-2'>100% Safe</h1>
                            <br />
                            <p className='text-sm'>
                                Oil therapy most populare nunc quis dolor convallis
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 md:gap-5 text-xl' data-aos="fade-up">
                        <div className='md:pr-20 py-5'>
                            <h1 className='text-[#41844d] text-2xl my-2'>Experts Team</h1>
                            <p className='text-sm'>
                                Oil therapy most populare nunc quis dolor convallis
                            </p>
                        </div>
                        <div className='md:pr-20 py-5'>
                            <h1 className='text-[#41844d] text-2xl my-2'>Special Offers</h1>
                            <p className='text-sm'>
                                Oil therapy most populare nunc quis dolor convallis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-left" src={fe} alt="" />
        </div>
    )
}

export default Features
