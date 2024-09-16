import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [open, setopen] = useState(false)
    return (
        <div className='font-["LibreBaskerville"]'>
            <nav className='flex justify-between items-center px-10 md:px-20  py-6'>
                <div className="text-3xl">Logo</div>
                <ul className={`flex duration-300 md:items-center py-5 md:py-0 bg-[#41844d] md:bg-none md:w-unset md:bg-[transparent] ${open ? 'open' : " "}`}>
                    <li className='text-white md:text-black px-10 py-4 md:py-0 text-xl md:text-2xl'><a href="#">Home</a></li>
                    <li className='text-white md:text-black px-10 py-4 md:py-0  text-xl md:md:text-2xl'><a href="#">Spa</a></li>
                    <li className='text-white md:text-black px-10 py-4 md:py-0  text-xl md:text-2xl flex items-center'><a href="#">Packages</a></li>
                    <li className='text-white md:text-black px-10 py-4 md:py-0  text-xl md:text-2xl'><a href="#">Blog</a></li>
                    <li className='text-white md:text-black px-10 py-4 md:py-0  text-xl md:text-2xl'><a href="#">Contact</a></li>

                </ul>
                <div className='text-white md:text-black flex md:hidden items-center list-none'>
                    <li className='text-2xl cursor-pointer'>
                        {
                            open ? <i onClick={() => setopen(!open)} className="fa-solid fa-xmark text-[#393939]"></i> :
                                <i onClick={() => setopen(!open)} className="fa-solid fa-bars text-[#393939]"></i>
                        }
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
