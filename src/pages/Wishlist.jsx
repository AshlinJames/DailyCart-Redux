import React from 'react'
import Header from '../components/Header'

function Wishlist() {
    return (
        <>
            <Header />
            <div style={{ paddingTop: "100px" }} className="mx-5 mt-5">
      <h1 className="text-3xl font-bold text-center my-5">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Wishlist Item */}
        <div className="rounded-lg p-3 shadow-md bg-white hover:shadow-lg transition">
          {/* image */}
          <img
            src="https://www.reneecosmetics.in/cdn/shop/files/Volumax-Mascara_Listing-PI_01.jpg?v=1742483402"
            alt="Volumax Mascara"
            className="w-full h-48 object-cover rounded"
          />

          <div className="text-center mt-3">
            {/* title of product */}
            <h3 className="font-bold text-xl">Volumax Mascara</h3>

            {/* Action buttons */}
            <div className="flex justify-center gap-6 mt-3 text-2xl">
              <button className="hover:scale-110 transition">
                <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
              </button>
              <button className="hover:scale-110 transition">
                <i className="fa-solid fa-cart-plus text-green-600"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Wishlist