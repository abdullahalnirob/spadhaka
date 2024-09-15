import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [open, setopen] = useState(false)
    return (
        <div className='font-["LibreBaskerville"]'>
            <nav className='flex justify-between items-center px-10 md:px-20  py-6'>
                <div className="text-3xl">Logo</div>
                <ul className={`flex md:items-center bg-slate-200 md:bg-none md:w-unset md:bg-[transparent] ${open ? 'open' : " "}`}>
                    <li className='px-10 py-4 md:py-0 text-2xl'><a href="#">Home</a></li>
                    <li className='px-10 py-4 md:py-0  text-2xl'><a href="#">Spa</a></li>
                    <li className='px-10 py-4 md:py-0  text-2xl flex items-center'><a href="#">Packages</a></li>
                    <li className='px-10 py-4 md:py-0  text-2xl'><a href="#">Blog</a></li>
                    <li className='px-10 py-4 md:py-0  text-2xl'><a href="#">Contact</a></li>
                    <li className='px-10 hidden md:block md:px-2 py-4 md:py-0  text-3xl'><a href="#"><i className="fa-solid fa-user"></i></a></li>
                    <li className='px-10 hidden md:block py-4 md:py-0  text-3xl'><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
                <div className='flex md:hidden items-center list-none'>
                    <li className='text-3xl'><a href="#"><i className="fa-solid fa-user"></i></a></li>
                    <li className='text-3xl px-6'><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li className='text-3xl'>
                        {
                            open ? <i onClick={()=>setopen(!open)} className="fa-solid fa-xmark"></i> :
                            <i onClick={()=>setopen(!open)}  className="fa-solid fa-bars"></i>
                        }
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
