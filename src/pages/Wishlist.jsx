import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const ourWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)
    
  
  const dispatch = useDispatch()
  const handleCart = (product) => {
    dispatch(removeWishlistItem(product?.id))
      dispatch(addToCart(product))
      const existingProduct = userCart?.find(item => item.id == product.id)
      if (existingProduct) {
        alert("product updated successfully")
      }
  
    }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="mx-5 mt-5">
        <h1 className="text-3xl font-bold text-center my-5">My Wishlist</h1>

        {ourWishlist?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {ourWishlist.map(product => (
              <div
                key={product?.id}
                className="rounded-lg p-3 shadow-md bg-white hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-full h-48 object-cover rounded"
                />

                <div className="text-center mt-3">
                  {/* Title */}
                  <h3 className="font-bold text-xl">{product?.title}</h3>

                  {/* Action buttons */}
                  <div className="flex justify-center gap-6 mt-3 text-2xl">
                    <button
                      onClick={() => dispatch(removeWishlistItem(product?.id))}
                      className="hover:scale-110 transition"
                    >
                      <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                    </button>
                    <button onClick={()=>handleCart(product)} className="hover:scale-110 transition">
                      <i className="fa-solid fa-cart-plus text-green-600"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl my-10 font-bold">
            Wishlist Is Empty!!!
          </p>
        )}
      </div>
    </>
  )
}

export default Wishlist
