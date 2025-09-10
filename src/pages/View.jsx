import React from 'react'
import Header from '../components/Header'

function View() {
    return (
        <>
            <Header />
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image + Buttons */}
      <div className="flex flex-col items-center">
        <img
          src="https://www.reneecosmetics.in/cdn/shop/files/Volumax-Mascara_Listing-PI_01.jpg?v=1742483402"
          alt="Essence Mascara Lash Princess"
          className="max-w-xs md:max-w-sm mb-5"
        />

        {/* Buttons under image */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            ADD TO WISHLIST
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-extrabold mb-2">
          Essence Mascara Lash Princess
        </h1>
        <p className="text-red-600 font-bold text-xl mb-2">$ 9.99</p>
        <p><span className="font-semibold">Brand :</span> Essence</p>
        <p><span className="font-semibold">Category :</span> beauty</p>
        <p className="mt-3">
          <span className="font-semibold">Description :</span> The Essence Mascara
          Lash Princess is a popular mascara known for its volumizing and
          lengthening effects. Achieve dramatic lashes with this long-lasting
          and cruelty-free formula.
        </p>

        {/* Client Reviews */}
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-3">Client Reviews</h2>

          <div className="bg-gray-100 p-3 rounded mb-2">
            <p className="font-semibold">Eleanor Collins :</p>
            <p>Would not recommend!</p>
            <p>Rating : 3 <i className="fa-solid fa-star text-yellow-500"></i></p>
          </div>

          <div className="bg-gray-100 p-3 rounded mb-2">
            <p className="font-semibold">Lucas Gordon :</p>
            <p>Very satisfied!</p>
            <p>Rating : 4 <i className="fa-solid fa-star text-yellow-500"></i></p>
          </div>

          <div className="bg-gray-100 p-3 rounded mb-2">
            <p className="font-semibold">Eleanor Collins :</p>
            <p>Highly impressed!</p>
            <p>Rating : 5 <i className="fa-solid fa-star text-yellow-500"></i></p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default View