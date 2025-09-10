import React from 'react'
import Header from '../components/Header'

function Wishlist() {
    return (
        <>
            <Header />
            <div style={{ paddingtop: '100px' }} className='mx-5 mt-5'>
                <h1 className="text-3xl font-bold text-center my-5 ">My Wishlist</h1>
                <div className="grid grid-cols-4 gap-4">
                    <div className="rounded  p-2 shadow-xl/30">
                        {/* image */}
                        <img height={'200px'} src="https://www.reneecosmetics.in/cdn/shop/files/Volumax-Mascara_Listing-PI_01.jpg?v=1742483402" alt="" />
                        <div className='text-center'>
                            {/* title of product */}
                            <h3 className='font-bold text-xl'>Volumax Mascara</h3>
                            <div className="flex justify-evenly">
                                <button><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                <button><i className="fa-solid fa-cart-plus text-green-600"></i></button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist