import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className='flex w-full text-xl bg-purple-900 text-white font-bold  p-5 justify-between'>
            <Link to={'/'} className='text-2xl'  ><i className="fa-solid fa-truck-fast"></i><span> Daily Cart</span></Link>
            <ul className='flex'>
                <li className='px-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart me-1 text-red-500"></i>Wishlist<span className='p-1 bg-black  rounded-full'>10</span></Link></li>
                <li className='mx-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping me-1 text-green-500"></i>cart<span className='p-1 bg-black  rounded-full'>20</span></Link></li>
            </ul>
        </nav>
    )
}

export default Header