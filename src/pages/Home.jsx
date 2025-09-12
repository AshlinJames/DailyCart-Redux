import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'



const Home = () => {
    const dispatch = useDispatch()
    const { loading, error, allProducts } = useSelector((state) => state.productReducer)
    console.log(loading, error, allProducts);



    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <>
            <Header />
            <div style={{ paddingTop: "100px" }} className="mx-5 mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts?.length > 0 ? (
            allProducts.map((product) => (
              <div
                key={product?.id}
                className="rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition"
              >
                {/* Image */}
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-full h-48 object-cover rounded"
                />

                {/* Product Info */}
                <div className="text-center mt-3">
                  <h3 className="font-bold text-lg">{product?.title}</h3>
                  <Link
                    to={`/${product?.id}/view`}
                    className="bg-purple-900 text-white px-3 py-1 rounded mt-3 inline-block hover:bg-purple-700 transition"
                  >
                    View More...
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Product Not Found</p>
          )}
        </div>
      )}
    </div>
        </>
    )
}

export default Home