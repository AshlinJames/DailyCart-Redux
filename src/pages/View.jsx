import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';

const View = () => {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  // console.log(id);
  const [product, setProduct] = useState({})
  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts.find(item => item.id == id))
  }, [])
  // console.log(product);
  const handleAddToWishlist = () => {
    //check product is in store wishlist
    const existingProduct = userWishlist?.find(item => item.id == product.id)
    if (existingProduct) {
      alert("product already exist in wishlist...add another!!!")
    } else {
      dispatch(addToWishlist(product))
    }
  }


  return (
    <>
      <Header />
       <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image + Buttons */}
      <div className="flex flex-col items-center">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="max-w-xs md:max-w-sm mb-5 rounded shadow-md"
        />

        {/* Buttons under image */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            ADD TO WISHLIST
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-extrabold mb-2">{product?.title}</h1>
        <p className="text-red-600 font-bold text-xl mb-3">$ {product?.price}</p>

        <p>
          <span className="font-semibold">Brand :</span> {product?.brand}
        </p>
        <p>
          <span className="font-semibold">Category :</span> {product?.category}
        </p>
        <p className="mt-3 leading-6">
          <span className="font-semibold">Description :</span>{" "}
          {product?.description}
        </p>

        {/* Client Reviews */}
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-3">Client Reviews</h2>

          {product?.reviews?.length > 0 ? (
            product?.reviews?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded mb-3 shadow-sm"
              >
                <p className="font-semibold">{item?.reviewerName}</p>
                <p className="text-sm">{item?.comment}</p>
                <p className="mt-1 text-yellow-600 font-medium">
                  Rating: {item?.rating}{" "}
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No reviews yet!!!</p>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default View