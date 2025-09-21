import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    if (userCart?.length > 0) {
      setTotalCart(Math.ceil(userCart?.map(item => item.totalPrice).reduce((prev, curr) => prev + curr)))
    }
  }, [userCart])
  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }

  }
  const checkout=()=>{
    dispatch(emptyCart())
    alert("Your order has been placed successfully...Thank you for shopping with us!!!!")
    navigate('/')

  }
  return (
    <>
      <Header />
      <div style={{ paddingTop: '50px' }} className='mx-5'>
        <h1 className="text-5xl font-bold text-blue-600 ">Cart Summary</h1>
      </div>

      {userCart?.length > 0 ? (
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Table */}
          <div className="col-span-2 bg-white shadow rounded p-5">
            <table className="w-full text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">#</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Image</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">...</th>
                </tr>
              </thead>
              <tbody>
                {userCart?.map((product, index) => (
                  <tr key={product?.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link
                        to={`/${product?.id}/view`}
                        className="text-blue-500 underline"
                      >
                        {product?.title?.slice(0, 20)}...
                      </Link>
                    </td>
                    <td>
                      <img
                        width="70px"
                        height="70px"
                        src={product?.thumbnail}
                        alt="product"
                      />
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <button onClick={()=>handleDecrementQuantity(product)} className="font-bold">-</button>
                        <input
                          className="border p-1 mx-3 rounded text-center"
                          style={{ width: '40px' }}
                          type="text"
                          value={product?.quantity}
                          readOnly
                        />
                        <button onClick={() => dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
                      </div>
                    </td>
                    <td>$ {product?.totalPrice}</td>
                    <td>
                      <button onClick={() => dispatch(removeCartItem(product?.id))}>
                        <i className="fa-solid fa-trash text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Actions */}
            <div className="flex justify-end gap-4 mt-5">
              <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                EMPTY CART
              </button>
              <Link to={'/'}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  SHOP MORE
                </button>
              </Link>
            </div>
          </div>

          {/* Total */}
          <div className="bg-white shadow rounded p-5 h-fit">
            <h2 className="text-lg font-bold">
              Total Amount : <span className="text-red-600">${totalCart}</span>
            </h2>
            <button onClick={checkout} className="bg-green-600 text-white px-6 py-2 rounded w-full mt-4 hover:bg-green-700">
              CHECK OUT
            </button>
          </div>
        </div>
      ) : (
        <p className="font-bold my-10 p-10 text-xl">Your Cart is Empty....</p>
      )}
    </>
  )
}

export default Cart