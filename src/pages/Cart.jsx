import React from 'react'
import Header from '../components/Header'

function Cart() {
  return (
    <>
     <Header />
            <div style={{ paddingtop: '100px' }} className='mx-5 mt-5'>
                <h1 className="text-5xl font-bold text-blue-600 my-5 ">Cart Summary</h1>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Table */}
      <div className="col-span-2 bg-white shadow rounded p-5">
        <table className="w-full text-center">
          <thead>
            <tr className="font-bold border-b">
              <th className="py-2">#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">1</td>
              <td>Volumax Mascara</td>
              <td>
                <img
                  src="https://www.reneecosmetics.in/cdn/shop/files/Volumax-Mascara_Listing-PI_01.jpg?v=1742483402"
                  alt="Volumax Mascara"
                  className="w-10 h-10 mx-auto"
                />
              </td>
              <td>
                <div className="flex justify-center items-center gap-2">
                  <button className="px-2 border">-</button>
                  <span>1</span>
                  <button className="px-2 border">+</button>
                </div>
              </td>
              <td>$ 14.99</td>
              <td>
                <button className="text-red-500">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Cart Actions */}
        <div className="flex justify-end gap-4 mt-5">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            EMPTY CART
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            SHOP MORE
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="bg-white shadow rounded p-5 h-fit">
        <h2 className="text-lg font-bold">
          Total Amount : <span className="text-red-600">$ 14.99</span>
        </h2>
        <button className="bg-green-600 text-white px-6 py-2 rounded w-full mt-4 hover:bg-green-700">
          CHECK OUT
        </button>
      </div>
    </div>
    </>
  )
}

export default Cart