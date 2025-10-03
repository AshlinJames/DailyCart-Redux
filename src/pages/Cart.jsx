import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    if (userCart?.length > 0) {
      setTotalCart(
        Math.ceil(
          userCart?.map(item => item.totalPrice).reduce((prev, curr) => prev + curr)
        )
      )
    }
  }, [userCart])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = () => {
    dispatch(emptyCart())
    alert("Your order has been placed successfully... Thank you for shopping with us!")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className="pt-16 px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
          Cart Summary
        </h1>

        {userCart?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Table */}
            <div className="lg:col-span-2 bg-white shadow rounded p-4 md:p-6 overflow-x-auto">
              <table className="hidden md:table w-full text-center border-collapse">
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
                    <tr key={product?.id} className="border-b">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">
                        <Link
                          to={`/${product?.id}/view`}
                          className="text-blue-500 underline"
                        >
                          {product?.title?.slice(0, 20)}...
                        </Link>
                      </td>
                      <td className="p-2">
                        <img
                          className="mx-auto rounded"
                          width="70"
                          height="70"
                          src={product?.thumbnail}
                          alt="product"
                        />
                      </td>
                      <td className="p-2">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleDecrementQuantity(product)}
                            className="font-bold text-lg px-2"
                          >
                            -
                          </button>
                          <input
                            className="border p-1 mx-2 rounded text-center w-12"
                            type="text"
                            value={product?.quantity}
                            readOnly
                          />
                          <button
                            onClick={() => dispatch(incrementQuantity(product?.id))}
                            className="font-bold text-lg px-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-2">$ {product?.totalPrice}</td>
                      <td className="p-2">
                        <button onClick={() => dispatch(removeCartItem(product?.id))}>
                          <i className="fa-solid fa-trash text-red-500"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {userCart?.map((product, index) => (
                  <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">{index + 1}.</span>
                      <button onClick={() => dispatch(removeCartItem(product?.id))}>
                        <i className="fa-solid fa-trash text-red-500"></i>
                      </button>
                    </div>
                    <Link
                      to={`/${product?.id}/view`}
                      className="text-blue-500 underline block mt-2"
                    >
                      {product?.title}
                    </Link>
                    <img
                      src={product?.thumbnail}
                      alt="product"
                      className="w-24 h-24 object-cover my-2 rounded"
                    />
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrementQuantity(product)}
                        className="font-bold text-lg px-2 border rounded"
                      >
                        -
                      </button>
                      <span className="px-2">{product?.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(product?.id))}
                        className="font-bold text-lg px-2 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-2 font-semibold text-gray-800">
                      Price: <span className="text-red-600">${product?.totalPrice}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
                >
                  EMPTY CART
                </button>
                <Link to={'/'} className="w-full md:w-auto">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                    SHOP MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Total */}
            <div className="bg-white shadow rounded p-5 h-fit">
              <h2 className="text-lg md:text-xl font-bold">
                Total Amount : <span className="text-red-600">${totalCart}</span>
              </h2>
              <button
                onClick={checkout}
                className="bg-green-600 text-white px-6 py-2 rounded w-full mt-4 hover:bg-green-700"
              >
                CHECK OUT
              </button>
            </div>
          </div>
        ) : (
          <p className="font-bold my-10 p-6 text-lg md:text-xl text-center">
            Your Cart is Empty....
          </p>
        )}
      </div>
    </>
  )
}

export default Cart
