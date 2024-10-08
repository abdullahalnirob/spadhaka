import React from 'react'
import OrganicTherapy from '../assets/Organic_Therapy.svg'
import MassageTherapy from '../assets/MassageTherapy.svg'
import OilTherapy from '../assets/OilTherapy.svg'
const Therapy = () => {
    return (
        <div className="flex items-center justify-center">
            <div data-aos="fade-up" className='max-w-[1800px]  grid grid-cols-1 md:grid-cols-3 py-20 gap-5 px-7 md:px-20'>
                <div className='flex my-10 md:my-0 flex-col text-center items-center justify-center'>
                    <img src={OrganicTherapy} alt="" className='w-1/2 md:w-1/3' />
                    <h1 className='my-6 text-2xl'>Organic Therapy</h1>
                    <h4 className=''>Organic most popular dolor amet, conse pellentesque risus nunc quis ut dolor Sit convallis elit justo, euagna</h4>
                    <button className='hover:text-[#41844d] duration-150 mt-8 text-xl border-2 px-6 py-3 rounded-full border-[#41844d]'>Details</button>
                </div>
                <div className='flex my-10 md:my-0 flex-col text-center items-center justify-center'>
                    <img src={MassageTherapy} alt="" className='w-1/2 md:w-1/3' />
                    <h1 className='my-6 text-2xl'>Massage Therapy</h1>
                    <h4 className=''>Massage therapy popular amet, conse pellentesque risus nunc quis ut dolor Sit convallis elit justo, euagna</h4>
                    <button className='hover:text-[#41844d] duration-150 mt-8 text-xl border-2 px-6 py-3 rounded-full border-[#41844d]'>Details</button>
                </div>
                <div className='flex my-10 md:my-0 flex-col text-center items-center justify-center'>
                    <img src={OilTherapy} alt="" className='w-1/2 md:w-1/3' />
                    <h1 className='my-6 text-2xl'>Oil Therapy</h1>
                    <h4 className=''>Oil is most popular dolor amet, conse pellentesque risus nunc quis ut dolor Sit convallis elit justo, euagna</h4>
                    <button className='hover:text-[#41844d] duration-150 mt-8 text-xl border-2 px-6 py-3 rounded-full border-[#41844d]'>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Therapy
